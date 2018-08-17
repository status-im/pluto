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

(defn- update-db [cofx {:keys [db] :as fx}]
  (if db (assoc cofx :db db) cofx))

;; TODO(janherich): we have similar function in `status-react` - it's probably worth to push such things
;; into some `re-frame-helpers` library, together with collection of generic, app agnostic co-effects/effects
;; like `now`/`random-id` co-effects or `http` call effect
(defn merge-fx
  ([cofx & fx-fns]
   (first (reduce (fn [[fx cofx] fx-fn]
                    (let [new-fx (fx-fn cofx)]
                      [(merge fx new-fx) (update-db cofx new-fx)]))
                  [{} cofx]
                  fx-fns))))
