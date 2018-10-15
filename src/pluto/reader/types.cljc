(ns pluto.reader.types
  "Resolve values based on provided types.
   Handles primitives, references and composed values."
  (:refer-clojure :exclude [resolve])
  (:require [clojure.string         :as string]
            [clojure.set            :as set]
            [pluto.reader.errors    :as errors]
            [pluto.reader.reference :as reference]))

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

(defmethod resolve :string [_ _ _ value]
  (if (string? value)
    {:data value}
    {:errors [(invalid-type-value :string value)]}))

(defmethod resolve :keyword [_ _ _ value]
  (if (keyword? value)
    {:data value}
    {:errors [(invalid-type-value :keyword value)]}))

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

(defn- resolve-arguments [ctx ext key data arguments]
  (if-let [type (get-in ctx [:capacities key data :arguments])]
    (resolve ctx ext type arguments)
    {:errors [(errors/error ::errors/missing-reference-arguments {:type key :value data})]}))

(defn- reference-with-arguments [ctx ext ref key name arguments]
  (if arguments
    (let [{:keys [data errors]} (resolve-arguments ctx ext key name arguments)]
      (errors/merge-errors {:data [ref data]} errors))
    {:data [ref]}))

(defn resolve-reference [ctx ext type [name arguments :as value] key error]
  (let [{:keys [data errors]} (reference/resolve ctx ext type value)]
     (merge (when data (reference-with-arguments ctx ext data key name arguments))
            (when errors
              {:errors (apply conj [(errors/error error name)] errors)}))))

(defmethod resolve :event [ctx ext type [name arguments :as value]]
  (resolve-reference ctx ext type value :events ::errors/unknown-event))

(defmethod resolve :query [ctx ext type [name arguments :as value]]
  (resolve-reference ctx ext type value :queries ::errors/unknown-query))

(defmethod resolve :default [_ _ type value]
  {:errors [(errors/error ::errors/invalid-type (merge {:type type} (when value {:value value})))]})
