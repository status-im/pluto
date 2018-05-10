(ns pluto.demo
  (:require [clojure.string :as string]
            [pluto.components.html :as html]
            [pluto.reader :as reader]
            [pluto.storage :as storage]
            [pluto.storage.http :as http]
            [pluto.storage.ipfs :as ipfs]
            [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [re-frame.loggers :as re-frame.loggers]
            [devtools.core :as devtools]))

(enable-console-print!)
(devtools/install!)

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

(defn render [h]
  (let [frame (js/document.getElementById "frame")]
   (reagent/render (h) (.. (aget frame "contentWindow" "document") -body -firstChild))))

(defn main-browser
  "A simple hook for :hooks/main"
  [{:keys [data errors]}]
  (fn []
    [:div
     (let [{:views/keys [main]} data]
       main)
     #_
     (when (seq errors)
       (into [:ul]
         (for [{:keys [type] :as m} errors]
           [:li
            [:span [:b (str type)] (pr-str (dissoc m :type))]])))]))

(defn wrap-extensions [os]
  (fn []
    [:div
     (for [o os]
       ^{:key o} [:div
                  [:h2 (:name o)]
                  [:p (:content o)]])]))

(defn storage-for [type]
  (condp = type
    "url"  (http/HTTPStorage.)
    "ipfs" (ipfs/IPFSStorage. "https://cors.io/?https://gateway.ipfs.io")))

(defn fetch [uri cb]
  (let [[type id] (string/split uri ":")]
    (storage/fetch
      (storage-for type)
      {:value id} cb)))

(defn ^:export load-and-render
  [s]
  (re-frame/clear-subscription-cache!)
  (fetch s
    #(-> %
         ;; TODO merge all returned files in a map
         :value
         first
         :content
         reader/read
         :data
         ((fn [m] (reader/parse {:components html/components :valid-extensions #{:extension/meta} :valid-hooks #{:hooks/main}} m)))
         main-browser
         render)))
