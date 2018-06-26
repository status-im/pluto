(ns pluto.reader.errors
  "
  Inspired by https://github.com/cognitect-labs/anomalies and https://github.com/dawcs/anomalies-tools"
  (:require [clojure.spec.alpha :as s]))

(s/def ::category #{::unknown-type
                    ::interrupted
                    ::incorrect
                    ::forbidden
                    ::unsupported
                    ::not-found
                    ::conflict
                    ::fault
                    ::busy})
(s/def ::message string?)
(s/def ::error (s/keys :req [::type ::value]
                       :opt [::message]))

(defn error [type o m]
  (assoc m ::type type ::value o))