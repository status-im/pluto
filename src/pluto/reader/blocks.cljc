(ns pluto.reader.blocks
  (:require [clojure.walk :as walk]
            [re-frame.core :as re-frame]))

(defmulti parse
  ""
  (fn [_ [type]] type))

(defn resolve-queries [env]
  ;; TODO only resolve encoded queries
  (reduce-kv #(assoc %1 %2 (if (record? %3) @(re-frame/subscribe (:value %3))) %3)
             {}
             env))

(defn let-block [{:keys [env]} child]
  (cond
    (coll? child) (walk/prewalk-replace (resolve-queries env) child)))

(defn bindings->env [v]
  ;; TODO errors: pair number of arguments, keys are symbols, values are primitives or queries
  ;; TODO destructuring
  (apply hash-map v))

(defmethod parse 'let [_ [_ bindings & body]]
  {:data
   ;; TODO error if multiple body as let only considers last
   (let [m     (bindings->env bindings)
         child (last body)]
     [let-block {:env m} child])})

(defn when-block [{:keys [test]} body]
  ;; TODO warning if test is not of boolean type
  (when test
    body))

(defmethod parse 'when [_ [_ test & body]]
  (cond
    (symbol? test)
    {:data (apply conj [when-block {:test test}] body)}
    :else
    {:errors [{:type :unsupported-type :value test}]}))

(defn if-block [{:keys [test]} & body]
  ;; TODO warning if test is not of boolean type
  (if test
    (first body)
    (second body)))

(defmethod parse 'if [_ [_ test then else]]
  (cond
    (symbol? test)
    {:data (apply conj [if-block {:test test}] (list then else))}
    :else
    {:errors [{:type :unsupported-type :value test}]}))

(defmethod parse :default [opts block] {:errors [{:type :unknown-block-type :opts opts :block block}]})