(ns pluto.reader.destructuring
  (:refer-clojure :exclude [destructure])  
  (:require [pluto.reader.errors :as errors]))

(declare destructure-assoc destructure-seq)

(defn- valid-bindings-form? [o]
  (or (symbol? o) (vector? o) (map? o) (= :as o)))

(defn- seq-bindings-size [bindings]
  (let [size (count bindings)]
    (if (some #{:as} bindings)
      (- size 2)
      size)))

(defn- symbol-afer-as? [bindings idx]
  (and (pos? idx) (= :as (nth bindings (dec idx)))))

(defn- merge-seq-bindings [bindings s m idx value]
  (cond
    (or (= :as value) (= '_ value)) m
    (symbol-afer-as? bindings idx) (assoc-in m [:data value] s)
    (symbol? value) (assoc-in m [:data value] (nth s idx))
    ;; Recursive destructuring
    (map? value) (errors/merge-results m (destructure-assoc value (nth s idx)))
    (sequential? value) (errors/merge-results m (destructure-seq value (nth s idx)))))

(defn- valid-seq-format? [bindings s]
  (and (sequential? bindings)
       (every? valid-bindings-form? bindings)
       (<= (seq-bindings-size bindings) (count s))))

(defn destructure-seq [bindings s]
  (if (valid-seq-format? bindings s)
    (reduce-kv #(merge-seq-bindings bindings s %1 %2 %3) {} (into {} (map-indexed vector bindings)))
    {:errors [(errors/error ::errors/invalid-destructuring-format {:type :sequential :data bindings})]}))

(defn- merge-assoc-bindings [s m k v]
  (cond
    (vector? v) (assoc-in m [:data k] (or ((first v) s) (second v)))
    (symbol? k) (assoc-in m [:data k] (v s))
    (= :as k) (assoc-in m [:data v] s)
    ;; Recursive destructuring
    (map? k) (errors/merge-results m (destructure-assoc k (v s)))
    (sequential? k) (errors/merge-results m (destructure-seq k (v s)))))

(defn- valid-assoc-format? [bindings]
  (and (map? bindings)
       (every? valid-bindings-form? (keys bindings))))

(defn destructure-assoc [bindings s]
  (if (valid-assoc-format? bindings)
    (reduce-kv #(merge-assoc-bindings s %1 %2 %3) {} bindings)
    {:errors [(errors/error ::errors/invalid-destructuring-format {:type :assoc :data bindings})]}))

;; recursively validate destructure bindings form
(defn validate-destructure-bindings [bindings]
  (not-empty
   (cond
    (map? bindings)
    (if (valid-assoc-format? bindings)
      (mapcat
       validate-destructure-bindings
       (filter (some-fn sequential? map?) (keys bindings)))
      [(errors/error ::errors/invalid-destructuring-format {:type :assoc :data bindings})])
    (sequential? bindings)
    (if (every? valid-bindings-form? bindings)
      (mapcat
       validate-destructure-bindings
       (filter (some-fn sequential? map?) bindings))
      [(errors/error ::errors/invalid-destructuring-format {:type :assoc :data bindings})]))))

(defn destructure
  "Given a pattern and an associated data structure, return a map of either:
   * :data, a map of extracted symbol / value pairs
   * :errors, a vector of errors encountered during the destructuring"
  [bindings s]
  (cond
    (sequential? s) (destructure-seq bindings s)
    (map? s) (destructure-assoc bindings s)))
