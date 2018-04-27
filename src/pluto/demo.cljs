(ns pluto.demo
  (:require [pluto.reader :as reader]
            [reagent.core :as reagent]
            [re-frame.core :as rf]
            [re-frame.loggers :as rf.loggers]
            [devtools.core :as devtools]))

(enable-console-print!)
(devtools/install!)

(def warn (js/console.warn.bind js/console))
(rf.loggers/set-loggers!
  {:warn (fn [& args]
           (cond
             (= "re-frame: overwriting" (first args)) nil
             :else (apply warn args)))})

(defn dispatch-event
  []
  (rf/dispatch [:random (zero? (rand-int 2))]))

(defonce do-timer (js/setInterval dispatch-event 1000))

(rf/reg-event-db
  :random
  (fn [db [_ b]]
    (assoc db :random b)))

(rf/reg-sub
  :random-boolean
  :random)

(defn load-http [s f]
  (let [xhr (js/XMLHttpRequest.)]
    (.open xhr "GET" s true)
    (.send xhr nil)
    (set! (.-onreadystatechange xhr)
          #(when (= (.-readyState xhr) 4)
             (f (.-response xhr))))))

(defn render [h]
  (let [frame (js/document.getElementById "frame")]
   (reagent/render (h) (.. (aget frame "contentWindow" "document") -body -firstChild))))

(defn header []
  [:div
   "Random boolean: "
   (let [b @(rf/subscribe [:random-boolean])]
     [:span {:style {:color (if b :green :red)}}
      (str b)])])


(defn wrap-with-cartouche [o]
  (fn []
    [:div
     ^{:key 1} [header]
     ^{:key 2} o]))

(defn ^:export run
  []
  (rf/clear-subscription-cache!)

  (load-http "/demo.edn"
    #(-> %
         reader/read
         :main
         reader/walk-conditionals
         reader/translate-components
         wrap-with-cartouche
         render)))
