(ns pluto.reader.hooks
  (:require [clojure.string :as string]
            [pluto.reader.errors :as errors]
            [pluto.reader.views  :as views]))

(defmulti resolve-property
          (fn [_ _ {:keys [type]} _] (cond
                                       (keyword? type) type
                                       (set? type) :keyword-set)))

(defn reference->symbol
  "Returns the symbol value from a reference

   ```clojure
   (= 'some.ref (reference->symbol '@views/some.ref))
   ```"
  [ref]
  (symbol (second ref)))

(defn property-value [{:keys [name]} hook]
  (get hook name))

(defmethod resolve-property :view [opts m def hook]
  (views/parse opts (get m (reference->symbol (property-value def hook)))))

(defn resolve-property-value [f {:keys [name] :as def} hook]
  (if-let [o (property-value def hook)]
    (if (f o)
      {:data o}
      {:errors [(errors/error ::errors/invalid-property-value o)]})
    {:errors [(errors/error ::errors/invalid-property-name name)]}))

(defmethod resolve-property :string [_ _ def hook]
  (resolve-property-value string? def hook))

(defmethod resolve-property :keyword [_ _ def hook]
  (resolve-property-value keyword? def hook))

(defmethod resolve-property :keyword-set [_ _ def hook]
  (resolve-property-value (:type def) def hook))

(defmethod resolve-property :default [_ _ {:keys [type]} _]
  {:errors [(errors/error ::errors/invalid-property-type type)]})

(defn hook? [s]
  (= "hooks" (namespace s)))

(defn hooks [ext]
  (filter hook? (keys ext)))

(defn root [s]
  (symbol "hooks" (string/join "." (drop-last (string/split (name s) #"\.")))))

(defn properties [opts s]
  (get-in opts [:capacities :hooks s :properties]))

(defn parse-hook [k v opts mm]
  (reduce #(let [{:keys [data errors]} (resolve-property opts mm %2 v)]
             (errors/merge-errors (assoc-in %1 [:data (:name %2)] data) errors))
          {} (properties opts (root k))))

(defn parse [opts m]
  (reduce-kv #(let [{:keys [data errors]} (parse-hook %2 %3 opts m)]
                (errors/merge-errors (assoc-in %1 [:data %2] data) errors))
             {} (select-keys m (hooks m))))
