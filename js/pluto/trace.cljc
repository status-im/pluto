(ns pluto.trace)

(def ^:private id (atom 0))

(defn- next-id [] (swap! id inc))

(defn create-trace
  "Create a trace map. To be used with `trace`"
  [c t v]
  {:id       (next-id)
   :category c
   :type     t
   :data     v})

(defn trace
  "Trace provided object using the ctx `tracer`"
  [{:keys [tracer]} m]
  (when (fn? tracer)
    (tracer m)))
