(ns pluto.reader.reference
  (:refer-clojure :exclude [resolve])
  (:require [pluto.reader.errors :as errors]))

(defn reference?
  "Return true if argument is a reference"
  [o]
  (and (vector? o)
       (let [c (count o)]
         (or (= 1 c) (= 2 c)))
       (symbol? (first o))))

(defn reference->symbol
  "Return the symbol pointed by the reference

   ```clojure
   (= 'some.ref (reference->symbol ['views/some.ref]))
   ```"
  [o]
  (when (reference? o)
    (first o)))

(defn resolve
  "Resolve a reference defined by a hook

   ```clojure
   (= {:data \"view\"} (resolve {'views/id \"view\"} ['views/id]))
   ```"
  [ext value]
  (if-let [s (reference->symbol value)]
    (if-let [o (get ext s)]
      {:data o}
      {:errors [(errors/error ::errors/unknown-reference {:value s})]})
    {:errors [(errors/error ::errors/invalid-reference {:value value})]}))
