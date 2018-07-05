(ns pluto.reader.hooks
  (:require [pluto.reader.errors :as errors]
            [pluto.reader.views  :as views]))

(defmulti resolve-property (fn [_ _ prop _] (:type prop)))

(defn reference->symbol
  "Returns the symbol value from a reference

   ```clojure
   (= 'some.ref (reference->symbol '@views/some.ref))
   ```"
  [ref]
  (symbol (second ref)))

(defmethod resolve-property :view [opts m {:keys [name]} hook]
  (views/parse opts (get m (reference->symbol (get hook name)))))

(defmethod resolve-property :string [_ _ _ hook]
  {:data hook})

(defn hook? [s]
  (= "hooks" (namespace s)))

(defn properties [opts s]
  (get-in opts [:capacities :hooks s :properties]))

(defn parse-hook [k v opts mm]
  (reduce #(let [{:keys [data errors]} (resolve-property opts mm %2 v)]
             (errors/merge-errors (assoc-in %1 [:data (:name %2)] data) errors))
          {} (properties opts k)))

(defn parse [opts m]
  (reduce-kv #(let [{:keys [data errors]} (parse-hook %2 %3 opts m)]
                (errors/merge-errors (assoc-in %1 [:data %2] data) errors))
             {} (select-keys m (filter hook? (keys m)))))
