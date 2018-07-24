(ns pluto.reader.blocks
  (:refer-clojure :exclude [destructure])  
  (:require [clojure.walk           :as walk]
            [pluto.reader.errors    :as errors]
            [pluto.reader.reference :as reference]
            [re-frame.core          :as re-frame]))

(defmulti parse
  "Parse a block element. Return hiccup data."
  (fn [_ [type]] type))

(defn resolve-query [o]
  (cond
    (reference/reference? o)
    @(re-frame/subscribe [(keyword (name (second o)))])))

(defn resolve-queries [env]
  (reduce-kv #(assoc %1 %2 (resolve-query %3))
             {}
             env))

(defn let-block [{:keys [env]} child]
  (cond
    (coll? child) (walk/prewalk-replace (resolve-queries env) child)))

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

(defn bindings-size [bindings]
  (let [size (count bindings)]
    (if (some #{:as} bindings)
      (- size 2)
      size)))

(defn destructure-seq [bindings s]
  (cond
    (or
      (not (sequential? bindings))
      (not (every? #(or (symbol? %) (vector? %) (map? %) (= :as %)) bindings))
      (> (bindings-size bindings) (count s)))
    {:errors [(errors/error ::errors/invalid-destructuring-format bindings)]}
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
      (not (every? #(or (symbol? %) (vector? %) (map? %) (= :as %)) (keys bindings))))
    {:errors [(errors/error ::errors/invalid-destructuring-format bindings)]}
    :else
    (reduce-kv #(merge-assoc-bindings s %1 %2 %3) {} bindings)))

(defn destructure [bindings s]
  (cond
    (sequential? s) (destructure-seq bindings s)
    (map? s) (destructure-assoc bindings s)))

(defn merge-bindings [m k v]
  (cond
    (symbol? k) (assoc-in m [:data k] v)
    (sequential? k) (errors/merge-results m (destructure-seq k v))
    (map? k) (errors/merge-results m (destructure-assoc k v))
    :else
    {:errors [(errors/error ::errors/invalid-destructuring-format [k v])]}))

(defn bindings->env [bindings]
  (cond
    (odd? (count bindings))
    {:errors [(errors/error ::errors/invalid-destructuring-format bindings)]}
    :else
    (reduce-kv merge-bindings
            {} (apply hash-map bindings))))
 
(defmethod parse 'let [_ [_ bindings & body]]
  (let [{:keys [data errors]} (bindings->env bindings)]
    (errors/merge-errors
      ;; TODO resolve query references only once, error if unknown
      {:data
       (let [child (last body)]
         [let-block {:env data} child])}
      errors)))

(defn when-block [{:keys [test]} body]
  ;; TODO warning if test is not of boolean type
  (when test
    body))

(defmethod parse 'when [_ [_ test & body]]
  (cond
    (symbol? test)
    {:data (apply conj [when-block {:test test}] body)}
    :else
    {:errors [(errors/error ::errors/unsupported-test-type test)]}))

(defn if-block [{:keys [test]} & body]
  (if test
    (first body)
    (second body)))

(defmethod parse 'if [_ [_ test then else]]
  (cond
    (symbol? test)
    {:data (apply conj [if-block {:test test}] (list then else))}
    :else
    {:errors [(errors/error ::errors/unsupported-test-type test)]}))

(defmethod parse :default [opts block] {:errors [{:type :unknown-block-type :opts opts :block block}]})
