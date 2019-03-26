(ns ^:figwheel-hooks pluto.dev
  (:require pluto.reader.events
            pluto.reader.views
            pluto.web.events
            pluto.web.queries
            [pluto.core           :as pluto]
            [pluto.log            :as log]
            [pluto.storages       :as storages]
            [pluto.web.components :as components]
            [devtools.core        :as devtools]
            [reagent.core         :as reagent]
            [re-frame.core        :as re-frame]
            [re-frame.registrar   :as registrar]
            [re-frame.loggers     :as re-frame.loggers]))

(enable-console-print!)
(devtools/install!)

(defn ^:before-load before-reload []
  (re-frame/clear-subscription-cache!)
  (println "Reloading ..."))

(defn ^:after-load after-reload []
  (println "Reloading done."))

(def warn (js/console.warn.bind js/console))
(re-frame.loggers/set-loggers!
  {:warn (fn [& args]
           (cond
             (= "re-frame: overwriting" (first args)) nil
             :else (apply warn args)))})

(defn- dispatch-events [ctx events]
  (doseq [event events]
    (if (vector? event)
      (re-frame/dispatch event)
      (log/fire! ctx ::log/error :event/dispatch event))))

(defn- resolve-query [ctx [id :as data]]
  (if (registrar/get-handler :sub id)
    (re-frame/subscribe data)
    (log/fire! ctx ::log/error :query/resolve data)))

(def ctx
  {:env        {:id "Extension ID"}
   :capacities {:components components/all
                :queries    {'random-boolean
                             {:data :random-boolean}
                             'identity
                             {:data      :extensions/identity
                              :arguments {:value :map}}}
                :hooks      {:main
                             {:properties {:view :view}}}
                :events     {'identity
                             {:permissions [:read]
                              :data        :identity
                              :arguments   {:cb :event}}
                             'alert
                             {:permissions [:read]
                              :data        :alert
                              :arguments   {:value :string}}}}
   :event-fn dispatch-events
   :query-fn resolve-query})

(def payload
  {:name "Test Extension"
   :users [{:nm "Jane"}
           {:nm "Sue"}]})

(defn render [h el]
  (reagent/render (h {:name "Test Extension"
                      :users [{:nm "Jane"}
                              {:nm "Sue"}]}) el))

(defn errors-list [v]
  (fn []
    [:div
     [:div "Errors"]
     (into [:ul]
           (for [[_ {type :type :as m}] v]
             [:li
              [:span [:b (str type)] (pr-str (dissoc m :type))]]))]))

(defn render-extension [m el el-errors]
  (let [{:keys [data errors]} (pluto/parse ctx m)]
    (when errors
      (render (errors-list errors) el-errors))
    (when-let [f (get-in data [:lifecycle :on-activation])]
      (f))
    (if-let [view (get-in data [:hooks :main.demo :view])]
      (render view el)
      (render (fn [] [:div "Oups"]) el))))

(defn read-extension [o el el-errors]
  (let [{:keys [data errors]} (pluto/read (:content o))]
    (render-extension data el el-errors)))

(defn render-result [{:keys [type value]} el el-errors]
  (case type
    :error (set! (.-innerHTML el-errors) value)
    (read-extension value el el-errors)))

(defn ^:export bootstrap
  [s el el-errors]
  (storages/fetch s #(render-result % el el-errors)))
