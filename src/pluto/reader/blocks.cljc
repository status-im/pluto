(ns pluto.reader.blocks
  (:require [clojure.string             :as string]
            [clojure.walk               :as walk]
            [clojure.spec.alpha         :as spec]
            [re-frame.core              :as re-frame]
            [pluto.reader.destructuring :as destructuring]
            [pluto.reader.errors        :as errors]
            [pluto.reader.permissions   :as permissions]
            [pluto.reader.types         :as types]
            [pluto.utils                :as utils]))

(defmulti parse
  "Parse a block element. Return hiccup data."
  (fn [ctx ext [type]] type))

(defn resolve-binding-value [v]
  (cond
    (vector? v) @(re-frame/subscribe v) ;; TODO better abstract query
    (not (list? v)) v))

(defn resolve-binding-key [k v]
  (if (symbol? k)
    k
    ;; TODO handle errors
    (:data (destructuring/destructure k v))))

(defn assoc-binding
  [m k v]
  (let [resolved-value (resolve-binding-value v)
        o (resolve-binding-key k resolved-value)]
    (if (symbol? o)
      (assoc m o resolved-value)
      (merge m o))))

(defn replace-atom [values o]
  (cond (contains? values o) (get values o)
        (symbol? o) nil
        (string? o) (utils/interpolate values o)
        (and (fn? o) (= :event (meta o))) #(o % values) ;; Intercept events and inject the env. TODO remove this hack
        :else o))

(defn let-block [{:keys [env]} children]
  ;; TODO nested let block should accumulate the env
  (let [values (reduce-kv assoc-binding {} env)]
    (walk/prewalk #(replace-atom values %) children)))

(defn properties? [o]
  (= 'properties o))

(defn static-value? [v]
  (or (utils/primitive? v) (map? v)))

(defn- query? [binding-value]
  (vector? binding-value))

(defn valid-bindings? [k v]
  (and (or (symbol? k) (map? k))
       (or (symbol? v) (static-value? v) (query? v) (query? v))))

(defn- resolve-symbol [m s]
  (if (and (symbol? s) (not= 'properties s))
    (resolve-symbol m (get m s))
    s))

(defn resolve-env
  "Resolve key/value pairs, specifically:
   * 'properties are kept as is
   * symbol values are replaced by their respective values if already present in the let scope
   * queries (defined as vectors) are replaced by atoms

   Returns a map of:
   * :data the resolved values
   * :errors the errors"
  [ctx ext {:keys [data] :as m} k v]
  ;; TODO Do not duplicate checks
  (if (valid-bindings? k v)
    (cond
      (properties? v) (assoc-in m [:data 'properties] k)
      (static-value? v)
      (if (map? k)
        (if-let [o (destructuring/destructure k v)]
          (errors/merge-results m o)
          {:errors [(errors/error ::errors/invalid-destructuring-format [k v])]})
        (assoc-in m [:data k] v))
      (query? v)
      (let [{:keys [data errors]} (types/resolve ctx ext :query v)]
        (errors/merge-errors (assoc-in m [:data k] data) errors)))
    {:errors [(errors/error ::errors/invalid-bindings [k v])]}))

(defn- valid-bindings-form? [bindings]
  (even? (count bindings)))

(defn bindings->env [ctx ext bindings]
  (if (valid-bindings-form? bindings)
    (reduce-kv #(resolve-env ctx ext %1 %2 (resolve-symbol (:data %1) %3)) {} (apply hash-map bindings))
    {:errors [(errors/error ::errors/invalid-bindings-format bindings)]}))

(defmethod parse 'let [ctx ext [_ bindings & body]]
  (let [{:keys [data errors] :as m} (bindings->env ctx ext bindings)]
    ;; TODO fail if some symbol are not defined in the env
    (if (= 1 (count body))
      (merge {:data [let-block {:env data} (last body)]}
             (when errors
               {:errors errors}))
      {:errors [(errors/error ::errors/invalid-let-body {:value body})]})))

(defn when-block [{:keys [test]} body]
  (when test body))

(defmethod parse 'when [_ _ [_ test & body :as parts]]
  (let [errors (cond-> nil
                 (not (symbol? test))
                 (conj (errors/error ::errors/unsupported-test-type test))
                 (empty? body)
                 (conj (errors/error ::errors/invalid-when-block parts {:empty-body-clause body})))]
    (if (not-empty errors)
      {:errors errors}
      {:data (apply conj [when-block {:test test}] body)})))

(defn if-block [{:keys [test]} & body]
  (if test
    (first body)
    (second body)))

(defmethod parse 'if [_ _ [_ test then else :as parts]]
  (let [parts-count (count (rest parts))
        errors (cond-> nil
                 (not (symbol? test))
                 (conj (errors/error ::errors/unsupported-test-type test))
                 (< 3 parts-count)
                 (conj (errors/error ::errors/invalid-if-block parts {:type :too-many-clauses
                                                                      :clause-count parts-count}))
                 (> 3 parts-count)
                 (conj (errors/error ::errors/invalid-if-block parts {:type :three-clauses-required
                                                                      :clause-count parts-count})))]
    (if (not-empty errors)
      {:errors errors}
      {:data (apply conj [if-block {:test test}] (list then else))})))

(defmethod parse :default [ctx ext block] {:errors [{:type :unknown-block-type :ctx ctx :block block}]})
