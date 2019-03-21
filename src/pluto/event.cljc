(ns pluto.event
  "Events capture the runtime activity of an extension")

(def ^:private id (atom 0))

(defn- next-id [] (swap! id inc))

(defn- create
  "Create an event map. To be used with `fire!`"
  [c t v]
  {:id       (next-id)
   :category c   ;; a keyword
   :type     t   ;; :error, :trace or :log
   :data     v}) ;; a map

(defn fire!
  "Fire an event provided object using the ctx `event-fn`"
  [{:keys [event-fn]} category type data]
  (when (fn? event-fn)
    (event-fn (create category type data))))
