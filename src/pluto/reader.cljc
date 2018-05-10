(ns pluto.reader
  "Overall idea
   Read time: string to data structure, only tags are replaced by records
   Parse time: validate all the things, produce hiccup than can be used as is
   # Read
     * tags are used as reference to other elements (views, events, queries). At read time they are replaced by records,
       at parse time they are translated to point to concrete elements (error if non existent).
       How this translation is done is type dependent (reagent component ref, subscribe call, dispatch, ..)
   # Parse
     * properties/children are defined as symbol only, can be defined in element having fn semantic (view, event, ..), are unified at parse time
     * conditionals are defined as list with symbol as first element. Replaced at parse time by references to corresponding reagent component
     * let (lexical scoping). No shadowing support (error). Resolve in local scope then delegate to :outer (chain collected from parents)
     * permissions required are accumulated at parse time
   # Activate
    * based on hooks, inject views / trigger events"
  (:refer-clojure :exclude [read])
  (:require [clojure.set              :as set]
            [clojure.tools.reader.edn :as edn]
            [pluto.reader.blocks      :as blocks]))

(defn- accumulate-reader-error! [a m]
  (swap! a conj m))

;; Record used to track references identified by a set of predefined tag literal

(defrecord Reference [tag value])

(defn mark-reference [type value] (Reference. type value))

#?(:clj
    (defn ex-message
      [ex]
      (when (instance? Throwable ex)
        (.getMessage ^Throwable ex))))

(defn read
  "Reads an extension definition as an EDN string. Valid tags are replaced by associated records.
   All references (identified by tagged literals) are marked by records.
   They reference keys in the definition map and are validated and replaced at parse time.
  
   No semantic validation is performed at this stage. 

   Returns a map defining:
   * :data the extension definition as a map
   * :errors a vector of errors map triggered during read"
  [s]
  (let [errors (atom nil)]
    (merge
      {:data
       (try
         (edn/read-string {:default #(do (accumulate-reader-error! errors {:type :unknown-tag :tag %1 :value %2}) %2)
                           :readers {'status/query #(mark-reference :query %)
                                     'status/event #(mark-reference :event %)
                                     'status/view  #(mark-reference :view %)
                                     'status/style #(mark-reference :style %)}}
                          s)
         (catch #?(:clj Exception :cljs :default) e
           (accumulate-reader-error! errors (assoc (ex-data e) :message (ex-message e)))
           nil))}
      (when-let [v @errors]
        {:errors v}))))

(def valid-namespaces #{"extension" "hooks" "views" "events" "queries" "styles" "i18n"})

(defn validate-keys [{:keys [valid-hooks valid-extensions]} s]
  (let [keys             (set (filter (comp empty? namespace) s))
        keys-with-ns     (set/difference (set s) keys)
        namespaces       (set (map namespace keys-with-ns))
        extra-namespaces (set/difference namespaces valid-namespaces)
        hooks-keys       (set/difference (set (filter #(= "hooks" (namespace %)) keys-with-ns)) valid-hooks)
        extension-keys   (set/difference (set (filter #(= "extension" (namespace %)) keys-with-ns)) valid-extensions)]
    (cond-> nil
            (seq keys)             (assoc :no-namespace keys)
            (seq extra-namespaces) (assoc :invalid-namespaces extra-namespaces)
            (seq hooks-keys)       (assoc :invalid-hooks hooks-keys)
            (seq extension-keys)   (assoc :invalid-extensions extension-keys))))

(defmulti resolve-reference
  ""
  (fn [tag _] tag))

(defmethod resolve-reference :view [_ value] {:data value}) ;; TODO properly handle local refs and globally whitelisted refs
;; TODO prevent infinite loops due to self refs ?

;; TODO other reference types

(defmethod resolve-reference :default [tag value] {:errors [{:type :unknown-reference-tag :tag tag :value value}]})

(defn primitive? [o]
  (or (boolean? o)
      (int? o)
      (float? o)
      (string? o)))

(defn accumulate-errors [m s]
  (update m :errors concat s))

(declare parse-view)

(defn parse-hiccup-children [opts children]
  (reduce #(let [{:keys [data errors]} (parse-view opts %2)]
             (cond-> (update %1 :data conj data)
                     (seq errors) (accumulate-errors errors)))
          {:data []} children))

(defn parse-hiccup-element [{:keys [components] :as opts} o]
  ;; TODO permissions
  (cond
    (or (symbol? o) (primitive? o)) {:data o}
    (vector? o)
    (let [[element properties & children] o
          component (if (fn? element) element (get components element))]
      (cond-> (let [m (parse-hiccup-children opts children)]
                ;; Reduce parsed children to a single map and wrap them in a hiccup element
                ;; whose component has been translated to the local platform
                (update m :data #(apply conj [(or component element) properties] %)))
              (nil? component) (accumulate-errors [{:type :unknown-component :element element}])))
    :else 3))

(defn parse-view [opts o]
  (cond
    (list? o) (parse-view opts (:data (blocks/parse opts o)))
    :else     (parse-hiccup-element opts o)))

(defmulti parse-value
  "Parse a definition element value.
   Returns a map defining:
    * :data the updated value
    * :permissions 
    * :errors a collection of errors"
  (fn [_ k _] (namespace k)))

(defmethod parse-value "extension" [opts _ v] v)

(defmethod parse-value "views" [opts _ v] (parse-view opts v))

;; TODO extension, events, queries, i18n, styles
(defmethod parse-value :default [_ k _] {:errors [{:type :unknown-element-type :value k}]})

(defn merge-parsed-value
  "Merge result of parse-value into a map.
   :data is updated to its parsed value
   :errors are accumulated"
  [opts m k v]
  (let [{:keys [data errors]} (parse-value opts k v)]
    (cond-> (assoc-in m [:data k] data)
            (seq errors) (accumulate-errors (map #(assoc % :key k) errors)))))

;; TODO use specs for validation? Depends on opts, need to perform replacement during walk
;; specs would allow to generate UIs and help with testing          
          
(defn parse
  "Parse an extension definition map as encapsulated in :data key of the map returned by read.
   `opts` is a map defining:
   * `valid-hooks` a set of valid hooks
  
   Returns a map defining:
   * :data a map
   * :permissions a vector of required permissions
   * :errors a vector of errors map triggered during parse"
  [opts m]
  (let [errors (validate-keys opts (keys m))]
    (cond-> (reduce-kv #(merge-parsed-value opts %1 %2 %3) {} m)
            (seq errors) (accumulate-errors (map (fn [error] {:type (key error) :value (val error)}) errors)))))
