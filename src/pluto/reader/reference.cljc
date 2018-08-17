(ns pluto.reader.reference
  (:refer-clojure :exclude [resolve])
  (:require [pluto.reader.errors :as errors]))

(defn reference?
  "Return true if argument is a reference"
  [o]
  (and (list? o) (= 'clojure.core/deref (first o))))

(defn reference->symbol
  "Return the symbol pointed by the reference

   ```clojure
   (= 'some.ref (reference->name '@views/some.ref))
   ```"
  [o]
  (when (reference? o)
    (second o)))

(def ns->type {"views" :view "queries" :query "events" :event})

(defn reference->type
  "Return the type of a reference

   ```clojure
   (= :view (reference->type '@views/some.ref))
   ```"
  [o]
  (when (reference? o)
    (when-let [ns (namespace (reference->symbol o))]
      (get ns->type ns))))

(defn resolve
  "Resolve a reference defined by a hook

   ```clojure
   (= {:data \"view\"} (resolve {'views/id \"view\"} {:name :view :type :view} {:view '@views/id}))
   ```"
  [m {:keys [name type optional?]} hook] 
  (let [ref (get hook name)]
    (if ref
      (if (= type (reference->type ref))
        (if-let [o (get m (reference->symbol ref))]
          {:data o}
          {:errors [(errors/error ::errors/missing-property-value name)]})
        {:errors [(errors/error ::errors/invalid-property-type type)]})
      (when-not optional?
        {:errors [(errors/error ::errors/missing-property-name type)]}))))
