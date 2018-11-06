(ns pluto.utils
  (:refer-clojure :exclude [ex-cause ex-message])
  (:require [clojure.string :as string]))

(defn ex-cause
  [ex]
  #?(:clj  (when (instance? Throwable ex)
             (.getCause ^Throwable ex))
     :cljs (cljs.core/ex-cause ex)))

(defn ex-message
  [ex]
  #?(:clj  (when (instance? Throwable ex)
             (.getMessage ^Throwable ex))
     :cljs (cljs.core/ex-message ex)))

(defn atom?
  [o]
  #?(:clj  (instance? clojure.lang.IAtom o)
     :cljs (instance? Atom o)))

(defn primitive? [o]
  (or (boolean? o)
      (int? o)
      (float? o)
      (string? o)))

(defn interpolate [values s]
  (reduce-kv #(string/replace %1 (str "${" (str %2) "}") (str %3))
             s values))
