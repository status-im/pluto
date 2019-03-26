(ns pluto.reader.events
  (:require [clojure.walk               :as walk]
            [pluto.error                :as error]
            [pluto.log                  :as log]
            [pluto.reader.destructuring :as destructuring]
            [pluto.reader.reference     :as reference]
            [pluto.reader.types         :as types]
            [pluto.utils                :as utils]))

;; TODO part of this is duplicated from blocks/let

(defn- interpolate [ctx m v]
  (let [{:keys [data errors]} (utils/interpolate m v)]
    (if errors
      (log/fire! ctx ::log/error :query/interpolation errors)
      data)))

(defn replace-atom [ctx env o]
  (cond (contains? env o) (get env o)
        (symbol? o) nil
        (string? o) (interpolate ctx env o)
        (fn? o) #(o %1 (merge {:a %2} {:env env}))
        :else (walk/postwalk-replace env o)))

(defn- resolve-env
  "Resolve pairs from `env` in `m`.
   Uses #replace-atom to perform the resolution."
  [ctx env m]
  (reduce-kv #(assoc %1 %2 (replace-atom ctx env %3)) {} m))

(defn- resolve-arguments
  "Resolve an event arguments based on event definition"
  [ctx ext event arguments]
  (if-let [type (get-in ctx [:capacities :events event :arguments])]
    (types/resolve ctx ext type arguments)
    {:errors [(error/syntax ::error/invalid {:type :reference} {:type :event :data event})]}))

(defn- dispatch-events
  "Dispatches an event using ctx"
  [{:keys [event-fn] :as ctx} events raw?]
  (if (seq events)
    (do
      (log/fire! ctx ::log/trace :event/dispatch events)
      (cond
        raw? events
        event-fn (event-fn ctx events)))
    (log/fire! ctx ::log/error :event/dispatch {})))

(defn- resolve-event
  "Returns the final event vector"
  [ctx ext env [event args :as reference]]
  (let [{data :data}   (reference/resolve ctx ext :event reference)
        {inline :data} (resolve-arguments ctx ext event (or args {}))]
    [data (:env ctx) (resolve-env ctx env inline)]))

(defn- create-event [ctx ext env ref]
  (cond
    (vector? ref)
    (resolve-event ctx ext env ref)
    :else
    (let [[_ test if else] ref]
      (if (get env test)
        (resolve-event ctx ext env if)
        (resolve-event ctx ext env else)))))

(defn- resolve-query
  "Resolve a query using ctx"
  [{:keys [query-fn] :as ctx} ext query]
  (let [{data :data} (types/resolve ctx ext :query query)]
    (when query-fn
      (when-let [signal (query-fn ctx data)]
        (let [o @signal]
          (log/fire! ctx ::log/trace :query/resolve o)
          o)))))

(defn- merge-resolved-query [ctx ext m {:keys [value bindings]}]
  (cond
    (map? bindings)
    (merge m (:data (destructuring/destructure bindings (merge m (resolve-query ctx ext value)))))
    (symbol? bindings)
    (assoc m bindings (resolve-query ctx ext value))))

(defn- event-dispatcher
  "Returns a function of 2 arguments "
  [ctx ext refs arguments {:keys [queries properties]}]
  {:data
   (with-meta
     (fn [dynamic {:keys [env raw?]}]
       ;; TODO env contains data that shouldn't be there
       ;; env is the dispatched argument. Used as default but is overridden by the local arguments
       ;; Perform destructuring based on dynamic and static arguments
       ;; Then resolve recursive properties in the aggregated env
       ;; Final map contains inline arguments resolved
       (let [{:keys [data errors]} (destructuring/destructure properties (merge dynamic arguments))]
         (when (seq errors)
           (log/fire! ctx ::log/error :event/destructuring errors))
         (let [env' (resolve-env ctx env (merge env (reduce #(merge-resolved-query ctx ext %1 %2) data queries)))]
           (dispatch-events ctx (map #(create-event ctx ext env' %) refs) raw?))))
     {:event true})})

(defn- references
  "Returns a list of local event references"
  [data]
  (drop 2 data))

(defn if-block? [o]
  (and (list? o)
       (let [[s test if else] o]
         (and (= 'if s)
              (symbol? test)
              (reference/reference? if)
              (and else (reference/reference? else))))))

(defn- event? [o]
  (or (reference/reference? o)
      (if-block? o)))

(defn local-event?
  "A local event must define a let block and have a single destructuring binding accessing 'properties."
  [data]
  (when (list? data)
    (let [[form bindings] data]
      (and (< 2 (count data))
           (= 'let form)
           (even? (count bindings))
           (map? (first bindings))
           (= 'properties (second bindings))
           (every? event? (references data))))))

(defn- merge-pair [m [k v]]
  (cond
    (= v 'properties) (assoc m :properties k)
    :else (update m :queries concat [{:value v :bindings k}])))

(defn- parse-let-bindings [bindings]
  (let [pairs (partition 2 bindings)]
    (reduce merge-pair
            {}
            pairs)))

(defn parse
  "Parses local references defining let blocks"
  [ctx ext [_ let-bindings :as local] arguments]
  (if (local-event? local)
    (event-dispatcher ctx ext (references local) arguments (parse-let-bindings let-bindings))
    {:errors [(error/syntax ::error/invalid {:type :local-event} {:data local})]}))

;; TODO check unresolved symbols

(defmethod types/resolve :event [ctx ext _ [_ arguments :as value]]
  (let [{:keys [data errors] :as m} (reference/resolve ctx ext :event value)]
    ;; resolve returns either data or errors
    (if data
      (merge (when data
               (if (keyword? data)
                 (event-dispatcher ctx ext (list value) arguments nil)
                 (parse ctx ext data arguments)))
             (when errors
               {:errors (apply conj [(error/syntax ::error/unknown {:type :event} {:data symbol})] errors)}))
      m)))
