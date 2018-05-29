(ns pluto.reader.reference
  (:refer-clojure :exclude [resolve]))

;; Record used to track references identified by a set of predefined tag literal

(defrecord Reference [tag value])

(defn create [type value] (Reference. type value))

(defn reference? [o] (instance? Reference o))

(defmulti resolve
          ""
          (fn [tag _] tag))

(defmethod resolve :view [_ value] {:data value}) ;; TODO properly handle local refs and globally whitelisted refs
;; TODO prevent infinite loops due to self refs ?

;; TODO other reference types

(defmethod resolve :default [tag value] {:errors [{:type :unknown-reference-tag :tag tag :value value}]})
