(ns pluto.reader.hooks
  (:require [clojure.string :as string]
            [pluto.reader.errors :as errors]
            [pluto.reader.views  :as views]))

(defmulti resolve-property (fn [_ _ prop _] (:type prop)))

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

(defmethod resolve-property :string [_ _ def hook]
  {:data (property-value def hook)})

(defmethod resolve-property :keyword [_ _ def hook]
  {:data (property-value def hook)})

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
