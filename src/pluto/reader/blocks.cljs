(ns pluto.reader.blocks
  (:require [re-frame.core :as re-frame]))

(defmulti parse (fn [_ [type]] type))

(defn bindings->env [v]
  (apply hash-map v))

(defn primitive? [o]
  (or (boolean? o)
      (int? o)
      (float? o)
      (string? o)))

(defmulti encode-value (fn [[f & _]] f))

(defmethod encode-value 'query [[_ & args]] (apply conj args))

(defn env-value [o]
  ;; TODO encode query as record. Validate query exists and potentially that data type matches
  ;; Ensure rest is pure data or arguments
  (println "ENV" o (type o))
  (cond
    (list? o)      (encode-value o)
    (primitive? o) o
    #_(and (instance? Reference o)
           (= :query (:type o)))
    ;o
    ;; TODO accumulate errors
    :else          {:errors [{:type :incorrect-let-value :value o}]}))

(defn env [m]
  (reduce-kv #(assoc %1 %2 (env-value %3))
             {}
             m))

(defn resolve-queries [env]
  ;; TODO only resolve encoded queries
  (reduce-kv #(assoc %1 %2 @(re-frame/subscribe %3))
             {}
             env))

(defn let-block [{:keys [env]} [k p children]]
  ;; Propagate env as meta on children element
  ;; TODO support multiple children
  ;; TODO figure out envs as part of properties, with cascading scopes (delegate to :outer)
  ;; Disallow symbol shadowing
  [k (assoc p :env (resolve-queries env)) (with-meta children {:env (resolve-queries env)})])

(defmethod parse 'let [_ [_ bindings & body]]
  {:data
   ;; TODO validate pairs of data
   ;; keys -> symbols
   ;; values -> primitive types, query
   ;; TODO warning if multiple body as let only considers last
   (let [m (bindings->env bindings)]
     [let-block {:env (env m)} (last body)])})

(defn test? [{:keys [env test]}]
  (cond
    (boolean? test) test
    (symbol? test) (test env)))

(defn when-block [props body]
  (when (test? props)
    body))

(defmethod parse 'when [[props test & body]]
  ;; TODO test can only be a symbol. This symbol must point to primitive type or query.
  ;; TODO If value known at read time, resolve statically
  (apply conj [when-block {:test test :env (:env (meta body))}] body))

(defmethod parse :default [opts block] {:errors [{:type :unknown-block-type :opts opts :block block}]})
