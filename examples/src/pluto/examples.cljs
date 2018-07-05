(ns pluto.examples
  (:require [clojure.string :as string]
            [pluto.components.html :as html]
            [pluto.reader :as reader]
            [pluto.storage :as storage]
            [pluto.storage.http :as http]
            [pluto.storage.ipfs :as ipfs]
            [reagent.core :as reagent]
            [reagent.dom :as dom]
            [re-frame.core :as re-frame]
            [re-frame.loggers :as re-frame.loggers]))

(def warn (js/console.warn.bind js/console))
(re-frame.loggers/set-loggers!
  {:warn (fn [& args]
           (cond
             (= "re-frame: overwriting" (first args)) nil
             :else (apply warn args)))})

(defonce do-timer (js/setInterval #(re-frame/dispatch [:random (zero? (rand-int 2))]) 1000))

(re-frame/reg-event-db
  :random
  (fn [db [_ b]]
    (assoc db :random b)))

(re-frame/reg-sub
  :random-boolean
  :random)

(defn render [h el]
  (reagent/render h el))

(defn errors-list [v]
  [:div
   [:div "Errors"]
   (into [:ul]
     (for [{:keys [type] :as m} v]
       [:li
        [:span [:b (str type)] (pr-str (dissoc m :type))]]))])

(defn storage-for [type]
  (condp = type
    "url"  (http/HTTPStorage.)
    "ipfs" (ipfs/IPFSStorage. "https://cors.io/?https://gateway.ipfs.io")))

(defn fetch [uri cb]
  (let [[type id] (string/split uri ":")]
    (storage/fetch
      (storage-for type)
      {:value id} cb)))

(defn parse [m]
  (reader/parse-hooks {:components html/components
                       :capacities {:hooks {'hooks/main {:properties [{:type :view :name :view}]}}}}
                m))

(defn render-extension [m el el-errors]
  (let [{:keys [data errors]} (parse m)]
    (when errors
      (render (errors-list errors) el-errors))
    (render (get-in data ['hooks/main :view]) el)))

(defn read-extension [o el el-errors]
  (let [{:keys [data errors]} (reader/read (:content (first o)))]
    (render-extension data el el-errors)))

(defn render-result [{:keys [type value]} el el-errors]
  (case type
    :error (set! (.-innerHTML el-errors) value)
    (read-extension value el el-errors)))

(defn ^:export load-and-render
  [s el el-errors]
  (dom/unmount-component-at-node el)
  (dom/unmount-component-at-node el-errors)
  (fetch s #(render-result % el el-errors)))
