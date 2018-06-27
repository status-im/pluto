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
  (:require [clojure.tools.reader     :as reader]
            [pluto.reader.blocks      :as blocks]
            [pluto.reader.errors      :as errors]
            [pluto.utils              :as utils]))

(defn- reader-error [ex]
  (errors/error ::errors/reader-error (:ex-kind (ex-data ex))
                (merge {::errors/message (utils/ex-message ex)}
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
  (try
    {:data
     #?(:clj   (binding [reader/*read-eval* false]
                 (reader/read-string {} s))
        :cljs  (reader/read-string {} s))}
    (catch #?(:clj Exception :cljs :default) ex
      {:errors [(reader-error ex)]})))

(def valid-keys #{'meta})
(def valid-namespaces #{"hooks" "views" "events" "queries" "styles" "i18n"})

(defmulti valid-namespaced-key? (fn [_ s] (namespace s)))

(defmethod valid-namespaced-key? "hooks" [{:keys [valid-hooks]} s]
  (let [valid-hook-keys (set (map name (keys valid-hooks)))]
    (valid-hook-keys (name s))))

(defmethod valid-namespaced-key? :default [_ _] true)

(defn- valid-key? [m s]
  (let [ns (namespace s)]
    (cond
      ns (and (valid-namespaces ns)
              (valid-namespaced-key? m s))
      :else (valid-keys s))))

(defn validate-keys [m s]
  (let [invalid-keys (set (filter (comp not #(valid-key? m %)) s))]
    (when (seq invalid-keys)
      (errors/error ::errors/invalid-keys invalid-keys))))

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
              (nil? component) (accumulate-errors [(errors/error ::errors/unknown-component element)])))))

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

(defmethod parse-value "hooks" [_ _ v] v)

(defmethod parse-value "views" [opts _ v] (parse-view opts v))

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
