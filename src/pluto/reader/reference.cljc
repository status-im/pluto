(ns pluto.reader.reference
  (:refer-clojure :exclude [resolve])
  (:require [pluto.reader.errors :as errors]))

(defn reference? [o]
  (and (list? o)
       (= 'clojure.core/deref (first o))))

(defmulti resolve
          ""
          (fn [m {:keys [type]}] type))

(defmethod resolve :view [m {:keys [value]}]
  (if-let [view (get m value)]
    {:data view}
    {:errors [(errors/error ::errors/unknown-reference :value value)]})) ;; TODO properly handle local refs and globally whitelisted refs
;; TODO prevent infinite loops due to self refs ?

;; TODO other reference types

(defmethod resolve :default [m {:keys [type value]}] {:errors [{:type :unknown-reference-type :value value}]})
