(ns pluto.log
  "Logs capture the runtime activity of an extension"
  (:require [clojure.spec.alpha :as spec]))

(spec/def ::category #{::error ::log ::trace})

(def ^:private id (atom 0))

(defn- next-id [] (swap! id inc))

(defn- create
  "Create a log map. To be used with `fire!`"
  [c t v]
  {:id       (next-id)
   :category c   ;; a keyword
   :type     t   ;; :error or :trace
   :data     v}) ;; a map

(defn fire!
  "Fire an event provided object using the ctx `log-fn`"
  [{:keys [log-fn]} category type data]
  (when (fn? log-fn)
    (log-fn (create category type data))))
