(ns pluto.reader.types
  "Resolve values based on provided types.
   Handles primitives, references and composed values."
  (:refer-clojure :exclude [resolve])
  (:require [clojure.string             :as string]
            [clojure.set                :as set]
            [pluto.reader.destructuring :as destructuring]
            [pluto.reader.errors        :as errors]
            [pluto.reader.reference     :as reference]
            [pluto.utils                :as utils]))

(def reference-types #{:view :event :query})

(defmulti resolve
  "Resolve a value based on a type.
   Returns a map of either:
    * data with the resolved data
    * errors encapsulating all errors generated during resolution"
  (fn [ctx ext type value]
    (if (symbol? value)
      :symbol
      (cond
        (keyword? type) type
        (:one-of type)  :one-of
        (set? type)     :subset
        (map? type)     :assoc
        (vector? type)  :sequence))))

(defmethod resolve :symbol [_ _ _ value]
  ;; TODO properly validate symbols based on inferred type
  {:data value})

(defn invalid-type-value [type value]
  (errors/error ::errors/invalid-type-value {:type type :value value}))

(defmethod resolve :boolean [_ _ _ value]
  (if (boolean? value)
    {:data value}
    {:errors [(invalid-type-value :boolean value)]}))

(defmethod resolve :number [_ _ _ value]
  (if (number? value)
    {:data value}
    {:errors [(invalid-type-value :number value)]}))

(defmethod resolve :string [_ _ _ value]
  (if (string? value)
    {:data value}
    {:errors [(invalid-type-value :string value)]}))

(defmethod resolve :keyword [_ _ _ value]
  (if (keyword? value)
    {:data value}
    {:errors [(invalid-type-value :keyword value)]}))

(defmethod resolve :vector [_ _ _ value]
  (if (vector? value)
    {:data value}
    {:errors [(invalid-type-value :vector value)]}))

(defmethod resolve :map [_ _ _ value]
  (if (map? value)
    {:data value}
    {:errors [(invalid-type-value :map value)]}))

(defmethod resolve :subset [_ _ type value]
  (if (and (not (nil? value)) (set/subset? value type))
    {:data value}
    {:errors [(invalid-type-value :subset value)]}))

(defmethod resolve :one-of [_ _ {:keys [one-of]} value]
  (if-let [o (one-of value)]
    {:data o}
    {:errors [(invalid-type-value :one-of value)]}))

(defmethod resolve :sequence [ctx ext type value]
  (if (and (vector? type) (= 1 (count type)) (map? (first type)))
    (apply errors/merge-results-with #(conj (vec %1) %2) (map #(resolve ctx ext (first type) %) value))
    {:errors [(errors/error ::errors/invalid-sequential-type {:type type :value value})]}))

(def ^:private sentinel ::sentinel)

(defn- property [name value]
  (let [normalized-name (keyword (string/replace (clojure.core/name name) "?" ""))]
    {:value     (get value normalized-name sentinel)
     :name      normalized-name
     :optional? (not= name normalized-name)}))

(defn- resolve-property [ctx ext m {:keys [name optional? value]} type]
  (if (not= sentinel value)
    (let [{:keys [data errors]} (resolve ctx ext type value)]
      (errors/merge-errors
        (if data (assoc-in m [:data name] data) m)
        errors))
    (if optional?
      (update m :data #(if (empty? %) {} %))
      (assoc m :errors [(errors/error ::errors/missing-property name)]))))

(defmethod resolve :assoc [ctx ext type value]
  (if (map? type)
    (reduce-kv #(resolve-property ctx ext %1 (property %2 value) %3)
               {} type)
    {:errors [(errors/error ::errors/invalid-assoc-type {:type type :value value})]}))

(defn- resolve-arguments [ctx ext event arguments]
  (if-let [type (get-in ctx [:capacities :events event :arguments])]
    (resolve ctx ext type arguments)
    {:errors [(errors/error ::errors/missing-reference-arguments {:type :events :value event})]}))

;; TODO part of this is duplicated from blocks/let

(defn replace-atom [env o]
  (cond (contains? env o) (get env o)
        (symbol? o) nil
        (string? o) (utils/interpolate env o)
        :else o))

(defn event-after-env [ref data args bindings]
  (with-meta
    (fn [o env]
      (let [env (merge env (reduce-kv #(assoc %1 (symbol (name %2)) %3) {} o)
                       (:data (destructuring/destructure bindings (merge o args))))
            dic (reduce-kv #(assoc %1 %2 (if (contains? env %3) (get env %3) %3)) {} env)]
        [ref (merge o (reduce-kv #(assoc %1 %2 (replace-atom dic  %3)) {} data))]))
    {:event true}))

(defn- reference-with-arguments [ctx ext ref event arguments args bindings]
  (if arguments
    (let [{:keys [data errors]} (resolve-arguments ctx ext event arguments)]
      (errors/merge-errors {:data (event-after-env ref data args bindings)} errors))
    {:data (fn [o v] [ref o])}))

(defn- reference-symbol [value]
  (nth value 2))

(defn local-event?
  "A local event must define a let block and have a single destructuring binding accessing 'properties."
  [data]
  (when (list? data)
    (let [[form bindings] data]
      (and (= 3 (count data))
           (= 'let form)
           (= 2 (count bindings))
           (map? (first bindings))
           (= 'properties (second bindings))
           (vector? (reference-symbol data))))))

(defn resolve-local-reference
  "References local references defining let blocks"
  [ctx ext type [name :as value]]
  (let [{:keys [data errors] :as m} (reference/resolve ctx ext type value)]
    ;; resolve returns either data or errors
    (if data
      (cond
        (local-event? data)
        (let [[event args :as reference] (reference-symbol data)
              bindings (first (second data))
              {:keys [data errors]} (reference/resolve ctx ext type reference)]
          (errors/merge-errors {:data {:ref data :event event :args args :bindings bindings}} errors))
        (keyword? data)
        {:data {:ref data :event name}}
        :else
        {:errors [(errors/error ::errors/invalid-local-event data)]})
      m)))

(defn resolve-event [ctx ext type [symbol arguments :as value]]
  (let [{:keys [data errors]}   (resolve-local-reference ctx ext type value)
        {event :event ref :ref args :args bindings :bindings} data]
    ;; TODO better separate local event handling
    (merge (when data (reference-with-arguments ctx ext ref event (or args arguments) arguments bindings))
           (when errors
             {:errors (apply conj [(errors/error ::errors/unknown-event symbol)] errors)}))))

(defmethod resolve :event [ctx ext type [name arguments :as value]]
  (resolve-event ctx ext type value))

(defmethod resolve :query [ctx ext type [name arguments :as value]]
  (let [{:keys [data errors]} (reference/resolve ctx ext type value)]
    (merge (when data {:data (if arguments [data arguments] [data])})
           (when errors
             {:errors (apply conj [(errors/error ::errors/unknown-query name)] errors)}))))

(defmethod resolve :default [_ _ type value]
  {:errors [(errors/error ::errors/invalid-type (merge {:type type} (when value {:value value})))]})
