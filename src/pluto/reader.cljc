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
            [pluto.reader.blocks      :as blocks]
            [pluto.reader.reference   :as reference]
            [pluto.utils              :as utils]))

(defn- accumulate-reader-error! [a m]
  (swap! a conj m))

(defn- accumulate-reader-exception! [a ex]
  (accumulate-reader-error! a (merge (ex-data ex)
                                     {:message (utils/ex-message ex)}
                                     (when-let [c (utils/ex-cause ex)]
                                       {:cause c}))))

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
                           :readers {'status/query #(reference/create :query %)
                                     'status/event #(reference/create :event %)
                                     'status/view  #(reference/create :view %)
                                     'status/style #(reference/create :style %)}}
                          s)
         (catch #?(:clj Exception :cljs :default) e
           (accumulate-reader-exception! errors e)
           nil))}
      (when-let [v @errors]
        {:errors v}))))

(def valid-extension-keys #{:meta})
(def valid-namespaces #{"hooks" "views" "events" "queries" "styles" "i18n"})

(defn validate-keys [{:keys [valid-hooks]} s]
  (let [keys                 (set (filter (comp empty? namespace) s))
        extra-extension-keys (set/difference keys valid-extension-keys)
        keys-with-ns         (set/difference (set s) keys)
        namespaces           (set (map namespace keys-with-ns))
        extra-namespaces     (set/difference namespaces valid-namespaces)
        hooks-keys           (set/difference (set (filter #(= "hooks" (namespace %)) keys-with-ns)) (map key valid-hooks))]
    (cond-> nil
            (seq extra-extension-keys) (assoc :type :invalid-extension-keys :value extra-extension-keys)
            (seq extra-namespaces)     (assoc :type :invalid-namespaces :value extra-namespaces)
            (seq hooks-keys)           (assoc :type :invalid-hooks :value hooks-keys))))

(defn accumulate-errors [m s]
  (update m :errors concat s))

(defn merge-errors [m errors]
  (cond-> m
          (seq errors) (accumulate-errors errors)))

(declare parse-view)

(defn parse-hiccup-children [opts children]
  (reduce #(let [{:keys [data errors]} (parse-view opts %2)]
             (merge-errors (update %1 :data conj data)
                           errors))
          {:data []} children))

(defn parse-hiccup-element [{:keys [components] :as opts} o]
  ;; TODO permissions
  ;; TODO handle errors
  (cond
    (or (symbol? o) (utils/primitive? o)) {:data o}
    (vector? o)
    (let [[element properties & children] o
          component (if (fn? element) element (get components element))]
      (cond-> (let [m (parse-hiccup-children opts children)]
                ;; Reduce parsed children to a single map and wrap them in a hiccup element
                ;; whose component has been translated to the local platform
                (update m :data #(apply conj [(or component element) properties] %)))
              (nil? component) (accumulate-errors [{:type :unknown-component :value element}])))))

(defn parse-view [opts o]
  (cond
    (list? o)
    (let [{:keys [data errors]} (blocks/parse opts o)]
      (if errors
        {:errors errors}
        (parse-view opts data))) ;; TODO ?
    :else     (parse-hiccup-element opts o)))

(defmulti parse-value
  "Parse a definition element value.
   Returns a map defining:
    * :data the updated value
    * :permissions 
    * :errors a collection of errors"
  (fn [_ k _] (namespace k)))

(defmethod parse-value "hooks" [opts _ v] v)

(defmethod parse-value "views" [opts _ v] (parse-view opts v))

;; TODO events, queries, i18n, styles
(defmethod parse-value :default [_ _ _] {:errors [{:type :unknown-key}]})

(defn merge-parsed-value
  "Merge result of parse-value into a map.
   :data is updated to its parsed value
   :errors are accumulated"
  [opts m k v]
  (if (namespace k)
    (let [{:keys [data errors]} (parse-value opts k v)] ;; TODO skip extension, hooks
      (merge-errors (assoc-in m [:data k] data)
                    (map #(assoc % :key k) errors)))
    m))

;; TODO use specs for validation? Depends on opts, need to perform replacement during walk
;; specs would allow to generate UIs and help with testing

(defn parse
  "Parse an extension definition map as encapsulated in :data key of the map returned by read.
   `opts` is a map defining:
   * `valid-hooks` a map of valid hook definitions
  
   Returns a map defining:
   * :data a map
   * :permissions a vector of required permissions
   * :errors a vector of errors maps triggered during parse"
  [opts m]
  (let [errors (validate-keys opts (keys m))]
    (merge-errors (reduce-kv #(merge-parsed-value opts %1 %2 %3) {} m)
                  errors)))
;; TODO replace all refs to query, event and view here