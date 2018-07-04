(ns pluto.reader.errors
  "Inspired by https://github.com/cognitect-labs/anomalies"
  (:require [clojure.spec.alpha :as spec]))

(spec/def ::type #{::reader-error
                   ::invalid-keys
                   ::invalid-meta
                   ::missing-keys
                   ::unknown-reference
                   ::unknown-component
                   ::invalid-view
                   ::invalid-block
                   ::unsupported-test-type})

(spec/def ::value any?)

(spec/def ::message string?)

(spec/def ::error (spec/keys :req [::type ::value]
                          :opt [::message]))

(defn valid-type? [type]
  (spec/valid? ::type type))

(defn error
  ([type o] (error type o {}))
  ([type o m]
   {:pre [(valid-type? type)]}
   (assoc m ::type type ::value o)))
