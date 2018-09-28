(ns pluto.js
  "Exports reader function to JavaScript hosts.
   Type conversion is properly handled."
  (:require [pluto.reader :as reader]))

(defn ^:export to-clj [o]
  (js->clj o))

(defn ^:export from-clj [o]
  (clj->js o))

(defn ^:export parse [opts m]
  (reader/parse (js->clj opts) (:data m)))