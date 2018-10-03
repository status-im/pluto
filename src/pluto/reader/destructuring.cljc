(ns pluto.reader.destructuring
  (:refer-clojure :exclude [destructure])  
  (:require [clojure.walk             :as walk]
            [pluto.reader.errors      :as errors]
            [pluto.reader.reference   :as reference]
            [pluto.reader.permissions :as permissions]
            [re-frame.core            :as re-frame]))

(defn symbol-afer-as? [bindings idx]
  (and (pos? idx) (= :as (nth bindings (dec idx)))))

(declare destructure-assoc destructure-seq)

(defn indexed-bindings [bindings]
  (into {} (map-indexed vector bindings)))

(defn merge-seq-bindings [bindings s m idx value]
  (cond
    (or (= :as value) (= '_ value)) m
    (symbol-afer-as? bindings idx) (assoc-in m [:data value] s)
    (symbol? value) (assoc-in m [:data value] (nth s idx))
    ;; Recursive destructuring
    (map? value) (errors/merge-results m (destructure-assoc value (nth s idx)))
    (sequential? value) (errors/merge-results m (destructure-seq value (nth s idx)))))

(defn seq-bindings-size [bindings]
  (let [size (count bindings)]
    (if (some #{:as} bindings)
      (- size 2)
      size)))

(defn valid-bindings-form? [o]
  (or (symbol? o) (vector? o) (map? o) (= :as o)))

(defn destructure-seq [bindings s]
  (cond
    (or
      (not (sequential? bindings))
      (not (every? valid-bindings-form? bindings))
      (> (seq-bindings-size bindings) (count s)))
    {:errors [(errors/error ::errors/invalid-destructuring-format {:type :sequential :data bindings})]}
    :else
    (reduce-kv #(merge-seq-bindings bindings s %1 %2 %3) {} (indexed-bindings bindings))))

(defn merge-assoc-bindings [s m k v]
  (cond
    (vector? v) (assoc-in m [:data k] (or ((first v) s) (second v)))
    (symbol? k) (assoc-in m [:data k] (v s))
    (= :as k) (assoc-in m [:data v] s)
    ;; Recursive destructuring
    (map? k) (errors/merge-results m (destructure-assoc k (v s)))
    (sequential? k) (errors/merge-results m (destructure-seq k (v s)))))

(defn destructure-assoc [bindings s]
  (cond
    (or
      (not (map? bindings))
      (not (every? valid-bindings-form? (keys bindings))))
    {:errors [(errors/error ::errors/invalid-destructuring-format {:type :assoc :data bindings})]}
    :else
    (reduce-kv #(merge-assoc-bindings s %1 %2 %3) {} bindings)))

(defn destructure
  [bindings s]
  (cond
    (sequential? s) (destructure-seq bindings s)
    (map? s) (destructure-assoc bindings s)))
