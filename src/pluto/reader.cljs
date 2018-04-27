(ns pluto.reader
  (:require [clojure.set :as set]
            [clojure.tools.reader.edn :as edn]
            [clojure.walk :as walk]
            [re-frame.core :as rf]
            [pluto.components.html :as html]))

;; Overall idea
;; Read time: string to data structure, only tags are replaced by records
;; Parse time: validate all the things, produce hiccup than can be used as is
;; # Read
;;  * tags are used as reference to other elements (views, events, queries). At read time they are replaced by records,
;;    at parse time they are translated to point to concrete elements (error if non existent).
;;    How this translation is done is type dependent (reagent component ref, subscribe call, dispatch, ..)
;; # Parse
;;  * properties/children are defined as symbol only, can be defined in element having fn semantic (view, event, ..), are unified at parse time
;;  * conditionals are defined as list with symbol as first element. Replaced at parse time by references to corresponding reagent component
;;  * let (lexical scoping). No shadowing support (error). Resolve in local scope then delegate to :outer (chain collected from parents)
;;  * permissions required are accumulated at parse time
;; # Activate
;;  * based on hooks, inject views / trigger events

(defn- accumulate-error! [a m]
  (swap! a conj m))

(defn read
  "Reads an extension definition as an EDN string. Valid tags are replaced by associated records.
   No semantic validation is performed at this stage.

   Returns a map defining:
   * :data the extension definition as a map
   * :errors a vector of errors map triggered during read"
  [s]
  ;; TODO Provide readers for #view, event, style by record tracking type / id
  ;; Those references keys in the definition map and must be validated and replaced during parse
  (let [errors (atom nil)]
    (merge
      {:data
       (try
         (edn/read-string {:default #(do (accumulate-error! errors {:type :unknown-tag :tag %1 :value %2}) %2)
                           :readers {}}
                          s)
         (catch js/Error e
           (accumulate-error! errors (assoc (ex-data e) :message (ex-message e)))
           nil))}
      (when-let [v @errors]
        {:errors v}))))

(def valid-namespaces #{"extension" "hooks" "views" "events" "queries" "styles" "i18n"})
(def valid-extensions #{:extension/meta :extension/lifecycle})

(defn validate-keys [s {:keys [valid-hooks]}]
  (let [keys             (set (filter (comp empty? namespace) s))
        keys-with-ns     (set/difference (set s) keys)
        namespaces       (set (map namespace keys-with-ns))
        extra-namespaces (set/difference namespaces valid-namespaces)
        hooks-keys       (set/difference (set (filter #(= "hooks" (namespace %)) keys-with-ns)) valid-hooks)
        extension-keys  (set/difference (set (filter #(= "extension" (namespace %)) keys-with-ns)) valid-extensions)]
    ;; TODO create a map of ns / keys and return as :keys
    (cond-> nil
            (seq keys) (assoc :no-namespace keys)
            (seq extra-namespaces) (assoc :invalid-namespaces extra-namespaces)
            (seq hooks-keys) (assoc :invalid-hooks hooks-keys)
            (seq extension-keys) (assoc :invalid-extensions extension-keys))))

(defn resolve-query [])
(defn resolve-event [])
(defn resolve-view [])
(defn resolve-i18n [])
(defn resolve-style [])

(defn parse
  "Parse an extension definition map as encapsulated in :data key of the map returned by read.
   `opts` is a map defining:
   * `valid-hooks` a set of valid hooks

   Returns a map defining:
   * :data a map
   * :permissions a vector of required permissions
   * :errors a vector of errors map triggered during read"
  [opts m]
  ;; TODO
  ; Replace lookup refs with values
  ; Replace conditional blocks with reagent components
  ; Errors; Permissions; env cascade (:outer)
  ; Replace UI symbols with components
  {:data         nil
   :errors      [{:type :invalid-view :path [] :id :aa}]
   :permissions nil}

  (let [{:keys [keys errors]} (validate-keys m opts)]))

(defn translate-components [o]
  (walk/prewalk-replace html/components o))

;; Conditionals support

(defmulti conditional (fn [[k & _]] k))

(defn test? [{:keys [env test]}]
  (cond
   (boolean? test) test
   (symbol? test) (test env)))

(defn when-block [props body]
  (when (test? props)
    body))

(defmethod conditional 'when [[props test & body]]
  (apply conj [when-block {:test test :env (:env (meta body))}] body))

(defn bindings->env [v]
  (apply hash-map v))

(defn primitive? [o]
  (or (boolean? o)
      (int? o)
      (float? o)
      (string? o)))

(defmulti encode-value (fn [[f & _]] f))

(defmethod encode-value 'query [[_ & args]] (apply conj args))

(defn env-value [o]
  ;; TODO encode query as record. Validate query exists and potentially that data type matches
  ;; Ensure rest is pure data or arguments
  (cond
    (list? o)
    (encode-value o)
    (primitive? o) o
    :else (throw "NO")))

(defn env [m]
  (reduce-kv #(assoc %1 %2 (env-value %3))
             {}
             m))

(defn resolve-queries [env]
  ;; TODO only resolve encoded queries
  (reduce-kv #(assoc %1 %2 @(rf/subscribe %3))
             {}
             env))

(defn let-block [{:keys [env]} [k p children]]
  ;; Propagate env as meta on children element
  ;; TODO support multiple children
  ;; TODO figure out envs as part of properties, with cascading scopes (delegate to :outer)
  ;; Disallow symbol shadowing
  [k (assoc p :env (resolve-queries env)) (with-meta children {:env (resolve-queries env)})])

(defmethod conditional 'let [[_ bindings & body]]
  ;; TODO validate pairs of data
  ;; keys -> symbols
  ;; values -> primitive types, query
  ;; TODO warning if multiple body as let only considers last
  (let [m (bindings->env bindings)]
    [let-block {:env (env m)} (last body)]))

(defmethod conditional :default [[k & _ :as all]]
  (throw (ex-info (str "Conditional '" k "' unexpected") {:form all})))

(defn walk-conditionals [v]
  (walk/prewalk (fn [x]
                  (if (list? x)
                    (conditional x)
                    x))
                v))
