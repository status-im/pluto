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
   (= 'some.ref (reference->symbol ['some.ref]))
   ```"
  [o]
  (when (reference? o)
    (first o)))

(def type->ns  {:view "views" :query "queries" :event "events"})
(def type->capacity {:view :components :query :queries :event :events})

(defn- resolve-symbol
  "Resolve a symbol first via the extension definition then via the host ctx."
  [ctx ext type ns s]
  (or (get ext (symbol ns (name s)))
      (get-in ctx [:capacities (get type->capacity type) s :value])))

(defn valid-reference? [ref]
  (boolean
    (when (vector? ref)
      (let [[name arguments] ref]
        (and (symbol? name)
             (>= 2 (count ref))
             (or (nil? arguments) (map? arguments) (symbol? arguments)))))))

(defn resolve
  "Resolve a reference defined by a hook

   ```clojure
   (= {:data \"view\"} (resolve {} {'views/id \"view\"} :view ['id]))
   ```"
  [ctx ext type value]
  (if (valid-reference? value)
    (let [s (reference->symbol value)]
      (if-let [ns (get type->ns type)]
        (if-let [o (resolve-symbol ctx ext type ns s)]
          {:data o}
          {:errors [(errors/error ::errors/unknown-reference {:value s :type type})]})
        {:errors [(errors/error ::errors/unknown-reference-type {:value type})]}))
    {:errors [(errors/error ::errors/invalid-reference {:type type :value value})]}))
