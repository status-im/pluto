(ns pluto.reader.blocks
  (:require [clojure.walk               :as walk]
            #?(:cljs [reagent.core      :as reagent])
            [pluto.error                :as error]
            [pluto.log                  :as log]
            [pluto.reader.destructuring :as destructuring]
            [pluto.reader.types         :as types]
            [pluto.utils                :as utils]))

(defn- invalid-block
  [type m]
  (error/syntax ::error/invalid {:type :block} (assoc m :type type)))

(defmulti parse
  "Parse a block element. Return hiccup data."
  (fn [ctx ext parent [type]] type))

(defn- interpolate [ctx m v]
  (let [{:keys [data errors]} (utils/interpolate m v)]
    (if errors
      (log/fire! ctx ::log/error :query/interpolation errors)
      data)))

(defn substitute-query-values [ctx m v]
  (walk/prewalk #(or (get m %) (when (string? %) (interpolate ctx m %)) %) v))

(defn- query? [binding-value]
  (and (vector? binding-value)
       (let [s (first binding-value)]
         (or (symbol? s) (keyword? s)))))

(defn resolve-rhs [{:keys [query-fn] :as ctx} env v]
  (cond
    (= v 'properties) (get env :pluto.reader/properties)
    (symbol? v) (get env v)
    (query? v)
    (when (fn? query-fn)
      (when-let [signal (query-fn ctx (substitute-query-values ctx env v))]
        (let [o @signal]
          (log/fire! ctx ::log/trace :query/resolve {:key v :value o})
          o)))
    :else v))

(defn destructure-into [env k v]
  (if (map? k)
    (into env (:data (destructuring/destructure k v)))
    (assoc env k v)))

(defn resolve-binding [ctx env k v]
  (let [v' (resolve-rhs ctx env v)]
    (destructure-into env k v')))

(defn resolve-bindings-into [ctx env bindings]
  (reduce #(apply resolve-binding ctx %1 %2) (or env {}) (partition 2 bindings)))

(defn replace-atom [ctx values o]
  (cond (contains? values o) (get values o)
        (symbol? o) nil
        (string? o) (interpolate ctx values o)
        (and (fn? o) (:event (meta o))) #(o %1 (merge %2 {:env values})) ;; Intercept events and inject the env. TODO remove this hack
        :else (walk/postwalk-replace values o)))

(defn walkup-upto-leaf [f lp? lf tree]
  (if (lp? tree)
    (lf tree)
    (let [res (f tree)
          f2 (partial walkup-upto-leaf f lp? lf)]
      (cond (list? res) (apply list (map f2 res))
            (map-entry? res) (vec (map f2 res))
            (seq? res) (doall (map f2 res))
            (coll? res) (into (empty res) (map f2 res))
            :else res))))

(declare let-block for-block)

(defn let-block [{:keys [ctx prev-env bindings]} children]
  (let [new-env (resolve-bindings-into ctx prev-env bindings)]
    (walkup-upto-leaf #(replace-atom ctx new-env %)
                      #(and (vector? %) (#{for-block let-block} (first %)))
                      (fn [[x props children]]
                        [x (assoc props :prev-env new-env) children])
                      children)))

(defn for-block [{:keys [ctx prev-env bindings]} children]
  (let [[k v] bindings
        for-values (resolve-rhs ctx prev-env v)]
    (when (sequential? for-values)
      #?(:cljs
          (apply array
                 (map reagent/as-element
                   (for [val for-values]
                     ^{:key val}
                     [let-block {:ctx ctx :prev-env prev-env :bindings [k val]}
                       children])))))))

(defn static-value? [v]
  (or (utils/primitive? v) (map? v)))

(defn valid-bindings? [k v]
  (and (or (symbol? k) (map? k) (vector? k))
       (or (symbol? v) (static-value? v) (query? v))))

(defn- valid-bindings-form? [bindings]
  (when (seqable? bindings)
    (even? (count bindings))))

(defn resolve-and-validate-queries [ctx ext bindings]
  (reduce (fn [accum [k v]]
            (if (vector? v)
              (let [{:keys [data errors]} (types/resolve ctx ext :query v)]
                (if (not-empty errors)
                  (update accum :errors concat errors)
                  (update accum :data concat [k data])))
              (update accum :data concat [k v])))
          {:data []}
          (partition 2 bindings)))

;; we also need a set of available symbols bound at this point
(defn validate-bindings [bindings]
  (if (valid-bindings-form? bindings)
    (not-empty
     (let [binding-pairs (partition 2 bindings)]
       (concat
        (->> binding-pairs
             (filter #(not (apply valid-bindings? %)))
             (mapv #(invalid-block 'let {:data % :reason :bindings})))
        (->> binding-pairs
             (map first)
             (filter (some-fn sequential? map?))
             (mapcat destructuring/validate-destructure-bindings)))))
    [(invalid-block 'let {:data bindings :reason :bindings-format})]))

(defn- valid-let-block? [body]
  (= 1 (count body)))

(defmethod parse 'let [ctx ext _ [_ bindings & body]]
  (if-not (valid-let-block? body)
    {:errors [(invalid-block 'let {:data body :reason :body})]}
    (let [binding-errors (validate-bindings bindings)]
      (if (not-empty binding-errors)
        {:errors binding-errors}
        (let [{:keys [errors data]} (resolve-and-validate-queries ctx ext bindings)]
          (if (not-empty errors)
            {:errors errors}
            {:data [let-block {:ctx ctx :bindings data} (last body)]}))))))

(defmethod parse 'for [ctx ext _ [_ binding & body]]
  (cond
    (not= 1 (count body))
    {:errors [(invalid-block 'for {:data body :reason :body})]}
    (or (not= 2 (count binding))
        (not ((some-fn symbol? map?) (first binding))))
    {:errors [(invalid-block 'for {:data binding :reason :bindings})]}
    :else
    (let [{:keys [errors data]} (resolve-and-validate-queries ctx ext binding)]
      (if (not-empty errors)
        {:errors errors}
        {:data [for-block {:ctx ctx :bindings data}
                (last body)]}))))

(defn when-block [{:keys [test]} body]
  (when test body))

(defmethod parse 'when [_ _ _ [_ test & body :as parts]]
  (let [errors (cond-> nil
                 (not (symbol? test))
                 (conj (invalid-block 'when {:data test :reason :invalid-test-type}))
                 (empty? body)
                 (conj (invalid-block 'when {:data parts :reason :empty-body-clause})))]
    (if (not-empty errors)
      {:errors errors}
      {:data (apply conj [when-block {:test test}] body)})))

(defn if-block [{:keys [test]} & body]
  (if test
    (first body)
    (second body)))

(defmethod parse 'if [_ _ _ [_ test then else :as parts]]
  (let [parts-count (count (rest parts))
        errors (cond-> nil
                 (not (symbol? test))
                 (conj (invalid-block 'if {:reason :test :data test}))
                 (< 3 parts-count)
                 (conj (invalid-block 'if {:reason :too-many-clauses :data parts}))
                 (> 3 parts-count)
                 (conj (invalid-block 'if {:reason :three-clauses-required :data parts})))]
    (if (not-empty errors)
      {:errors errors}
      {:data (apply conj [if-block {:test test}] (list then else))})))

(defn case-block [{:keys [expression tests]} & results]
  (or (some #(when (= expression (key %)) (val %)) (zipmap tests results))
    (when (not= (count tests) (count results))
      (last results))))

(defmethod parse 'case [_ _ _ [_ expression & clauses]]
  (let [pairs (partition 2 clauses)
        errors (cond-> nil
                 (not (every? keyword? (map first pairs)))
                 (conj (invalid-block 'case {:reason :tests :data (map first pairs)})))]
    (if (not-empty errors)
      {:errors errors}
      {:data (into [case-block {:expression expression :tests (map first pairs)}]
               (concat (mapv second pairs)
                 (when (odd? (count clauses)) [(last clauses)])))})))

(defmethod parse :default [_ _ _ block] {:errors [(error/syntax ::error/unknown {:type :block} {:data block})]})
