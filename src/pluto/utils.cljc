(ns pluto.utils
  (:refer-clojure :exclude [ex-cause ex-message]))

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

(defn primitive? [o]
  (or (boolean? o)
      (int? o)
      (float? o)
      (string? o)))
