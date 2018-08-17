(ns pluto.reader.blocks
  (:refer-clojure :exclude [destructure])  
  (:require [clojure.walk             :as walk]
            [pluto.reader.errors      :as errors]
            [pluto.reader.reference   :as reference]
            [pluto.reader.permissions :as permissions]
            [re-frame.core            :as re-frame]))

(defmulti parse
  "Parse a block element. Return hiccup data."
  (fn [_ [type]] type))

(defn resolve-query [[_ [sub-keyword sub-args :as sub]]]
  @(re-frame/subscribe sub))

(defn- query? [binding-value]
  (and (list? binding-value)
       (= 'query (first binding-value))))

(defn resolve-binding [binding-value]
  (cond
    (query? binding-value) (resolve-query binding-value) 
    :else binding-value))

(defn resolve-bindings [env]
  (reduce-kv #(assoc %1 %2 (resolve-binding %3))
             {}
             env))

(defn let-block [{:keys [env]} child]
  (cond
    (coll? child) (walk/prewalk-replace (resolve-bindings env) child)))

(defn symbol-afer-as? [bindings idx]
  (and (pos? idx) (= :as (nth bindings (dec idx)))))

(declare destructure-assoc destructure-seq)

(defn indexed-bindings [bindings]
  (into {} (map-indexed vector bindings)))

(defn merge-seq-bindings [bindings s m idx value]
  (cond
    (or (= :as value) (= '_ value)) m
    (symbol-afer-as? bindings idx) (assoc-in m [:data value] s)
    (symbol? value) (assoc-in m [:data value] (nth s idx))
    ;; Recursive destructuring
    (map? value) (errors/merge-results m (destructure-assoc value (nth s idx)))
    (sequential? value) (errors/merge-results m (destructure-seq value (nth s idx)))))

(defn bindings-size [bindings]
  (let [size (count bindings)]
    (if (some #{:as} bindings)
      (- size 2)
      size)))

(defn destructure-seq [bindings s]
  (cond
    (or
      (not (sequential? bindings))
      (not (every? #(or (symbol? %) (vector? %) (map? %) (= :as %)) bindings))
      (> (bindings-size bindings) (count s)))
    {:errors [(errors/error ::errors/invalid-destructuring-format bindings)]}
    :else
    (reduce-kv #(merge-seq-bindings bindings s %1 %2 %3) {} (indexed-bindings bindings))))

(defn merge-assoc-bindings [s m k v]
  (cond
    (vector? v) (assoc-in m [:data k] (or ((first v) s) (second v)))
    (symbol? k) (assoc-in m [:data k] (v s))
    (= :as k) (assoc-in m [:data v] s)
    ;; Recursive destructuring
    (map? k) (errors/merge-results m (destructure-assoc k (v s)))
    (sequential? k) (errors/merge-results m (destructure-seq k (v s)))))

(defn destructure-assoc [bindings s]
  (cond
    (or
      (not (map? bindings))
      (not (every? #(or (symbol? %) (vector? %) (map? %) (= :as %)) (keys bindings))))
    {:errors [(errors/error ::errors/invalid-destructuring-format bindings)]}
    :else
    (reduce-kv #(merge-assoc-bindings s %1 %2 %3) {} bindings)))

(defn destructure [bindings s]
  (cond
    (sequential? s) (destructure-seq bindings s)
    (map? s) (destructure-assoc bindings s)))

(defn properties? [o]
  (and (reference/reference? o) (= 'properties (reference/reference->symbol o))))

(defn merge-bindings [m k v]
  (cond
    (properties? v) (assoc-in m [:data 'properties] k)
    (symbol? k)     (assoc-in m [:data k] v)
    :else
    (if-let [o (destructure k v)]
      (errors/merge-results m o)
      {:errors [(errors/error ::errors/invalid-destructuring-format [k v])]})))

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
