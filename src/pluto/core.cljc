(ns pluto.core
  "Main pluto namespace entry point."
  (:refer-clojure :exclude [read])
  (:require [clojure.string           :as string]
            [clojure.tools.reader.edn :as edn]
            [pluto.error              :as error]
            [pluto.reader.events      :as events]
            [pluto.reader.types       :as types]
            [pluto.reader.views       :as views]
            [pluto.utils              :as utils]))

(defn- reader-error [ex]
  (error/create ::error/format ::error/invalid nil
                (merge {:kind    (:ex-kind (ex-data ex))
                        :message (utils/ex-message ex)}
                       (when-let [c (utils/ex-cause ex)]
                         {:cause c}))))

(defn read
  "Reads an extension definition as an EDN string.

   No semantic validation is performed at this stage.

   Returns a map defining:
   * `:data` the extension definition as a map
   * `:errors` a vector of errors map triggered during read"
  [s]
  (try
    {:data (edn/read-string {} s)}
    (catch #?(:clj Exception :cljs :default) ex
      {:errors {'global {'all [(reader-error ex)]}}})))

(defn key-name [k] (or (namespace k) (name k)))

(defmulti parse-value
  "Parse an extension value from its type"
  (fn [ctx ext k v] (key-name k)))

(defn- capacity? [m s]
  (let [keys (set (map name (keys m)))]
    (keys (name s))))

(defn parse-value-with [capacities t k f]
  (if (capacity? (get capacities t) k)
    [(error/syntax ::error/invalid {:type ::error/overridden} {:data k})]
    (f)))

(def ^:private meta-properties
  {:name           :string
   :description    :string
   :documentation? :string})

(defmethod parse-value "meta" [ctx ext _ v]
  (types/resolve ctx ext meta-properties v))

(defmethod parse-value "events" [{:keys [capacities] :as ctx} ext k v]
  (parse-value-with capacities :events k #(events/parse ctx ext v "")))

(defmethod parse-value "views" [{:keys [capacities] :as ctx} ext k v]
  (parse-value-with capacities :components k #(views/parse ctx ext v)))

(defn hook-type
  "Type of a hook
   e.g. (= \"chat.command\" (hook-type 'chat.command.hello-world))"
  [s]
  (when s
    (string/join "." (butlast (string/split (name s) #"\.")))))

(defmethod parse-value "hooks" [{:keys [capacities] :as ctx} ext k o]
  (parse-value-with capacities :hooks k
                    #(let [{:keys [properties]} (get-in ctx [:capacities :hooks (keyword (hook-type k))])]
                       (types/resolve ctx ext properties o))))

(def ^:private lifecycle-properties
  {:ephemeral?         :boolean
   :on-activation?     :event
   :on-installation?   :event
   :on-deactivation?   :event
   :on-deinstallation? :event})

(defmethod parse-value "lifecycle" [ctx ext _ v]
  (types/resolve ctx ext lifecycle-properties v))

(defmethod parse-value :default [_ _ k _]
  [(error/syntax ::error/invalid {:data k})])

(defn- accumulate
  "Accumulates the result of parsed primitives.
   Shape is: {:data {'primitive data} :errors {'primitive errors} :permissions #{}}
   If returned map contains :errors, :data is ignored."
  [ctx ext acc k v]
  (let [{:keys [data errors]} (parse-value ctx ext k v)]
    (assoc-in acc
              (if (namespace k)
                [(if errors :errors :data) (keyword (key-name k)) (keyword (name k))]
                [(if errors :errors :data) (keyword (key-name k))])
              (or errors data))))

(def ^:const order ["meta" "events" "views" "hooks" "lifecycle"])

(defn- order-comparator
  "Compares keys based on `order`"
  [k1 k2]
  (let [indexes (zipmap order (range))]
    (compare [(get indexes (key-name k1)) k1] [(get indexes (key-name k2)) k2])))

(defn parse
  "Parse an extension definition map as encapsulated in :data key of the map returned by `read`.
   `ctx` is a map defining:
   * `capacities` a map of valid supported capacities (hooks, queries, events)
   * `env`        a map of extension environment, will be provided as second parameter into event and query handlers
   * `event-fn`   a function used to fire events
   * `query-fn`   a function receiving a query and returning an `atom`
   * `log-fn`     [optional] a function that will be passed details about runtime extension execution (event fired, query values updated, ..): {:id 0 :category :error :type ::log/dispatch :data {}}


   Returns the input map modified so that values have been parsed into:
   * `:data`        the result of parsing
   * `:permissions` a vector of required permissions
   * `:errors`      a vector of errors maps triggered during the parsing

   If `errors` is not empty, `data` will not be available.

   e.g.

   {:data        {'views/a (fn [o] [text \"hello\"])}
    :permissions {'events/f #{}}}

    or

    {:errors      {'views/a [{:category ::error/invalid ..}]}
     :permissions {'events/f #{}}}"
  [ctx ext]
  (reduce-kv #(accumulate ctx ext %1 %2 %3) {} ;; TODO move ext to %1
             ;; Make sure elements are parsed in a controlled order
             (into (sorted-map-by order-comparator) ext)))
