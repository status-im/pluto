(ns pluto.reader
  "Read time: string to data structure, only tags are replaced by records
   Parse time: validate all the things, produce hiccup than can be used as is
   # Read
   # Parse
     * properties/children are defined as symbol only, can be defined in element having fn semantic (view, event, ..), are unified at parse time
     * conditionals are defined as list with symbol as first element. Replaced at parse time by references to corresponding reagent component
     * let (lexical scoping). No shadowing support (error). Resolve in local scope then delegate to :outer (chain collected from parents)
     * permissions required are accumulated at parse time
   # Activate
    * based on hooks, inject views / trigger events"
  (:refer-clojure :exclude [read])
  (:require [clojure.string :as string]
            [clojure.set :as set]
            [clojure.spec.alpha :as spec]
            [clojure.tools.reader :as reader]
            [pluto.reader.errors :as errors]
            [pluto.reader.hooks :as hooks]
            [pluto.utils :as utils]))

(defn reader-error [ex]
  (errors/error ::errors/reader-error (:ex-kind (ex-data ex))
                (merge {::errors/message (utils/ex-message ex)}
                       (when-let [c (utils/ex-cause ex)]
                         {:cause c}))))

(defn read
  "Reads an extension definition as an EDN string.

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

;; Element validation

(def mandatory-keys #{'meta})
(def valid-keys mandatory-keys)

(defn capacity? [m s]
  (let [keys (set (map name (keys m)))]
    (keys (name s))))

(defn valid-capacity? [m k v spec]
  (if (capacity? m k)
    (when-not (spec/valid? spec v)
      [(errors/error ::errors/invalid-value k)])
    [(errors/error ::errors/invalid-key k)]))

;; validation

(defmulti valid-element? (fn [_ k _] (or (namespace k) (name k))))

(spec/def ::meta (spec/keys :req-un [::name ::description ::documentation]))

(defmethod valid-element? "meta" [_ _ v]
  (when-not (spec/valid? ::meta v)
    [(errors/error ::errors/invalid-meta v)]))

(spec/def ::hooks map?)

(defmethod valid-element? "hooks" [{:keys [hooks]} k v]
  (if (capacity? hooks (hooks/root-id k))
    (when-not (spec/valid? ::hooks v)
      [(errors/error ::errors/invalid-value k)])
    [(errors/error ::errors/invalid-key k)]))

(spec/def ::queries map?)

(defmethod valid-element? "queries" [{:keys [queries]} k v]
  (valid-capacity? queries k v ::queries))

(spec/def ::events map?)

(defmethod valid-element? "events" [{:keys [events]} k v]
  (valid-capacity? events k v ::events))

(defmethod valid-element? "events" [{:keys [events]} k v]
  (valid-capacity? events k v ::events))

(defmethod valid-element? "views" [_ _ _]
  [])

(defmethod valid-element? :default [_ k _]
  [(errors/error ::errors/invalid-key k)])

(defn validate [{:keys [capacities]} m]
  (let [keys         (set (keys m))
        missing-keys (set/difference mandatory-keys keys)]
    (reduce-kv #(if-let [errors (valid-element? capacities %2 %3)] (concat %1 errors) %1)
               (when (seq missing-keys) [(errors/error ::errors/missing-keys missing-keys)])
               m)))

(defn parse-meta [v]
  (if (spec/valid? ::meta v)
    {:data {'meta v}}
    {:errors [(errors/error ::errors/invalid-meta v)]}))

(defn parse
  "Parse an extension definition map as encapsulated in :data key of the map returned by read.
   `opts` is a map defining:
   * `capacities` a map of valid supported capacities (hooks, queries, events)

   Returns a map defining:
   * :data a map of meta and parsed hooks
   * :permissions a vector of required permissions
   * :errors a vector of errors maps triggered during parse"
  [opts m]
  (let [errors (validate opts m)]
    (errors/merge-results
      (parse-meta ('meta m))
      (hooks/parse opts m)
      {:errors errors})))
