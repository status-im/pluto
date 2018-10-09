(ns pluto.reader.blocks
  (:require [clojure.walk               :as walk]
            [re-frame.core              :as re-frame]
            [pluto.reader.destructuring :as destructuring]
            [pluto.reader.errors        :as errors]
            [pluto.reader.permissions   :as permissions]
            [pluto.reader.types         :as types]))

(defmulti parse
  "Parse a block element. Return hiccup data."
  (fn [ctx ext [type]] type))

(defn resolve-query [ctx ext query]
  (let [{:keys [data errors]} (types/resolve ctx ext :query query)]
    ;; TODO errors ??
    (when data (data))))

(defn- query? [binding-value]
  (vector? binding-value))

(defn resolve-binding-value [ctx ext v]
  ;; TODO resolve query statically
  (cond
    (query? v) (resolve-query ctx ext v)
    (not (list? v)) v))

(defn resolve-binding-key [k v]
  (if (symbol? k)
    k
    ;; TODO handle errors
    (:data (destructuring/destructure k v))))

(defn assoc-binding [ctx ext m k v]
  (let [resolved-value (resolve-binding-value ctx ext v)
        o (resolve-binding-key k resolved-value)]
    (if (symbol? o)
      (assoc m o resolved-value)
      (merge m o))))

(defn let-block [{:keys [env ctx ext]} child]
  (cond
    (coll? child) (walk/prewalk-replace (reduce-kv #(assoc-binding ctx ext %1 %2 %3) {} env) child)))

(defn properties? [o]
  (= 'properties o))

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
  (if (odd? (count bindings))
    {:errors [(errors/error ::errors/invalid-destructuring-format bindings)]}
    (reduce-kv merge-bindings {} (apply hash-map bindings))))

(defmethod parse 'let [ctx ext [_ bindings & body]]
  (let [{:keys [data errors]} (bindings->env bindings)]
      ;; TODO fail if some symbol are not defined in the env
      ;; TODO resolve query references only once, error if unknown
    (merge
      {:data
       (let [child (last body)]
         [let-block {:env data :ctx ctx :ext ext} child])}
      (when errors
        {:errors errors}))))

(defn when-block [{:keys [test]} body]
  ;; TODO warning if test is not of boolean type
  (when test
    body))

(defmethod parse 'when [_ _ [_ test & body]]
  (cond
    (symbol? test)
    {:data (apply conj [when-block {:test test}] body)}
    :else
    {:errors [(errors/error ::errors/unsupported-test-type test)]}))

(defn if-block [{:keys [test]} & body]
  (if test
    (first body)
    (second body)))

(defmethod parse 'if [_ _ [_ test then else]]
  (cond
    (symbol? test)
    {:data (apply conj [if-block {:test test}] (list then else))}
    :else
    {:errors [(errors/error ::errors/unsupported-test-type test)]}))

(defmethod parse :default [opts block] {:errors [{:type :unknown-block-type :opts opts :block block}]})
