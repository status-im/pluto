(ns pluto.reader.hooks
  (:require [clojure.string :as string]
            [pluto.reader.errors :as errors]
            [pluto.reader.views  :as views]))

(defmulti resolve-property
          (fn [{:keys [type]} _ _ _]
            (cond
              (keyword? type) type
              (set? type) :keyword-set
              (map? type) :map
              (vector? type) :vector)))

(defn reference->symbol
  "Returns the symbol value from a reference

   ```clojure
   (= 'some.ref (reference->symbol '@views/some.ref))
   ```"
  [ref]
  (when-let [s (second ref)]
    (symbol s)))

(defn property-value [name hook]
  (get hook name))

(defn resolve-reference [m {:keys [name]} hook f]
  (let [o (property-value name hook)]
    (if-let [s (reference->symbol o)]
      (f (get m s))
      {:errors [(errors/error ::errors/missing-property-value name)]})))

(defmethod resolve-property :view [def hook opts m]
  (resolve-reference m def hook #(views/parse opts %)))

(defmethod resolve-property :event [def hook _ m]
  (resolve-reference m def hook (fn [o] {:data o})))

(defmethod resolve-property :query [def hook _ m]
  (resolve-reference m def hook (fn [o] {:data o})))

(defn resolve-property-value [f {:keys [name optional?]} hook]
  (if-let [o (property-value name hook)]
    (if (f o)
      {:data o}
      {:errors [(errors/error ::errors/invalid-property-value o)]})
    (when-not optional?
      {:errors [(errors/error ::errors/invalid-property-name name)]})))

(defmethod resolve-property :string [def hook _ _]
  (resolve-property-value string? def hook))

(defmethod resolve-property :keyword [def hook _ _]
  (resolve-property-value keyword? def hook))

(defmethod resolve-property :keyword-set [def hook _ _]
  (resolve-property-value (:type def) def hook))

(declare parse-properties)

(defn map->properties [m]
  (reduce-kv #(conj %1 {:name %2 :type %3}) [] m))

(defmethod resolve-property :map [def hook opts m]
  (parse-properties (map->properties (:type def)) ((:name def) hook) opts m))

(defmethod resolve-property :vector [def hook opts m]
  (let [props (map->properties (first (:type def)))]
    (apply errors/merge-results-with #(conj (vec %1) %2) (map #(parse-properties props % opts m) ((:name def) hook)))))

(defmethod resolve-property :default [{:keys [type]} _ _ _]
  {:errors [(errors/error ::errors/invalid-property-type type)]})

(defn hook? [s]
  (= "hooks" (namespace s)))

(defn hooks [ext]
  (filter hook? (keys ext)))

(defn root [s]
  (symbol "hooks" (string/join "." (drop-last (string/split (name s) #"\.")))))

(defn properties [opts s]
  (reduce-kv #(conj %1 {:name %2 :type %3}) []
             (get-in opts [:capacities :hooks s :properties])))

(defn normalize-property [{:keys [name] :as prop}]
  (let [normalized-name (keyword (string/replace (clojure.core/name name) "?" ""))]
    (assoc prop
      :name      normalized-name
      :optional? (not= name normalized-name))))

(defn parse-properties [props v opts m]
  (reduce #(let [{:keys [data errors]} (resolve-property (normalize-property %2) v opts m)]
             (errors/merge-errors (if data (assoc-in %1 [:data (:name (normalize-property %2))] data) %1) errors))
          {} props))

(defn parse-hook [k v opts m]
  (parse-properties (map->properties (get-in opts [:capacities :hooks (root k) :properties])) v opts m))

(defn parse [opts m]
  (reduce-kv #(let [{:keys [data errors]} (parse-hook %2 %3 opts m)]
                (errors/merge-errors (assoc-in %1 [:data %2] data) errors))
             {} (select-keys m (hooks m))))
