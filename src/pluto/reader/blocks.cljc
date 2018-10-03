(ns pluto.reader.blocks
  (:require [clojure.walk               :as walk]
            [pluto.reader.destructuring :as destructuring]
            [pluto.reader.errors        :as errors]
            [pluto.reader.reference     :as reference]
            [pluto.reader.permissions   :as permissions]
            [re-frame.core              :as re-frame]))

(defmulti parse
  "Parse a block element. Return hiccup data."
  (fn [_ [type]] type))

(defn resolve-query [[_ [sub-keyword sub-args :as sub]]]
  (when-let [o (re-frame/subscribe sub)]
    @o))

(defn- query? [binding-value]
  (and (list? binding-value)
       (= 'query (first binding-value))))

(defn resolve-binding-value [v]
  (cond
    (query? v) (resolve-query v)
    (not (list? v)) v))

(defn resolve-binding-key [k v]
  (cond
    (symbol? k) k
    :else (:data (destructuring/destructure k v))))

(defn assoc-binding [m k v]
  (let [resolved-value (resolve-binding-value v)]
    (let [o (resolve-binding-key k resolved-value)]
      (cond
        (symbol? o)
        (assoc m o resolved-value)
        :else
        (merge m o)))))

(defn resolve-bindings [env]
  (reduce-kv assoc-binding {} env))

(defn let-block [{:keys [env]} child]
  (cond
    (coll? child) (walk/prewalk-replace (resolve-bindings env) child)))

(defn properties? [o]
  (and (reference/reference? o) (= 'properties (reference/reference->symbol o))))

(defn inject-new-bindings [m v]
  (cond
    (symbol? v) (get m v)
    (list? v) (walk/prewalk-replace m v)
    :else v))

(defn merge-bindings [{:keys [data] :as m} k v]
  (if (properties? v)
    (assoc-in m [:data 'properties] k)
    (let [av (inject-new-bindings data v)]
      (if (or (symbol? k) (query? av))
        (assoc-in m [:data k] av)
        (if-let [o (destructuring/destructure k av)]
          (errors/merge-results m o)
          {:errors [(errors/error ::errors/invalid-destructuring-format [k av])]})))))

(defn bindings->env [bindings]
  (cond
    (odd? (count bindings))
    {:errors [(errors/error ::errors/invalid-destructuring-format bindings)]}
    :else
    (reduce-kv merge-bindings {} (apply hash-map bindings))))

(defn- restrict-get-in [path {:keys [read]}]
  (when-not (permissions/allowed-path? path read)
    (errors/error ::errors/forbidden-read-path path)))

(defn- restrict-queries
  "Parse time enforcement of valid queries, checks that query
  is exposed via host platform + enforces valid query vectors for 
  `:get-in` query."
  [{:keys [permissions queries]} env]
  (keep (fn [[_ env-value]]
          (when (query? env-value) 
            (let [[_ [sub-name sub-args]] env-value]
              (if (not (contains? queries sub-name))
                (errors/error ::errors/query-not-exposed sub-name)
                (when (= :get-in sub-name) 
                  (restrict-get-in sub-args permissions))))))
        env))

(defmethod parse 'let [{:keys [capacities]} [_ bindings & body]]
  (let [{:keys [data errors]} (bindings->env bindings)
        query-errors          (restrict-queries capacities data)] 
    (errors/merge-errors
      ;; TODO fail if some symbol are not defined in the env
      ;; TODO resolve query references only once, error if unknown
      {:data
       (let [child (last body)]
         [let-block {:env data} child])}
      (concat errors query-errors))))

(defn when-block [{:keys [test]} body]
  ;; TODO warning if test is not of boolean type
  (when test
    body))

(defmethod parse 'when [_ [_ test & body]]
  (cond
    (symbol? test)
    {:data (apply conj [when-block {:test test}] body)}
    :else
    {:errors [(errors/error ::errors/unsupported-test-type test)]}))

(defn if-block [{:keys [test]} & body]
  (if test
    (first body)
    (second body)))

(defmethod parse 'if [_ [_ test then else]]
  (cond
    (symbol? test)
    {:data (apply conj [if-block {:test test}] (list then else))}
    :else
    {:errors [(errors/error ::errors/unsupported-test-type test)]}))

(defmethod parse :default [opts block] {:errors [{:type :unknown-block-type :opts opts :block block}]})
