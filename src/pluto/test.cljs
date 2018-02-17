(ns pluto.test
    (:require [clojure.tools.reader.edn :as edn]
              [clojure.walk :as walk]
              [reagent.core :as reagent]
              [re-frame.core :as rf]
              [re-frame.loggers :as rf.loggers]
              [clojure.string :as str]
              [devtools.core :as devtools]))

(devtools/install!)

;; A detailed walk-through of this source code is provided in the docs:
;; https://github.com/Day8/re-frame/blob/master/docs/CodeWalkthrough.md

;; -- Domino 1 - Event Dispatch -----------------------------------------------

(defn dispatch-timer-event
  []
  (let [now (js/Date.)]
    (rf/dispatch [:timer now])))  ;; <-- dispatch used

;; Call the dispatching function every second.
;; `defonce` is like `def` but it ensures only one instance is ever
;; created in the face of figwheel hot-reloading of this file.
(defonce do-timer (js/setInterval dispatch-timer-event 1000))


;; -- Domino 2 - Event Handlers -----------------------------------------------

(rf/reg-event-db              ;; sets up initial application state
  :initialize                 ;; usage:  (dispatch [:initialize])
  (fn [_ _]                   ;; the two parameters are not important here, so use _
    {:time (js/Date.)         ;; What it returns becomes the new application state
     :time-color "#f88"}))    ;; so the application state will initially be a map with two keys


(rf/reg-event-db                ;; usage:  (dispatch [:time-color-change 34562])
  :time-color-change            ;; dispatched when the user enters a new colour into the UI text field
  (fn [db [_ new-color-value]]  ;; -db event handlers given 2 parameters:  current application state and event (a vector)
    (assoc db :time-color new-color-value)))   ;; compute and return the new application state


(rf/reg-event-db                 ;; usage:  (dispatch [:timer a-js-Date])
  :timer                         ;; every second an event of this kind will be dispatched
  (fn [db [_ new-time]]          ;; note how the 2nd parameter is destructured to obtain the data value
    (assoc db :time new-time)))  ;; compute and return the new application state


;; -- Domino 4 - Query  -------------------------------------------------------

(rf/reg-sub
  :time
  (fn [db _]     ;; db is current app state. 2nd unused param is query vector
    (:time db))) ;; return a query computation over the application state

(rf/reg-sub
  :time-color
  (fn [db _]
    (:time-color db)))


;; -- Domino 5 - View Functions ----------------------------------------------

(defn clock
  []
  [:div.example-clock
   {:style {:color @(rf/subscribe [:time-color])}}
   (-> @(rf/subscribe [:time])
       .toTimeString
       (str/split " ")
       first)])

(defn color-input
  []
  [:div.color-input
   "Time color: "
   [:input {:type "text"
            :value @(rf/subscribe [:time-color])
            :on-change #(rf/dispatch [:time-color-change (-> % .-target .-value)])}]])  ;; <---

(defn screen [props content]
  [:div props content])

(defn button [props content]
  [:button props content])

(defn text [props content]
  [:text props content])

(def components {:text   text
                 :screen screen})

(defn my-unknown [tag val]
  {:unknown-tag tag :value val})

(defn subscribe [o]
  @(rf/subscribe o))

(defn parse-view [s]
  (edn/read-string {:default my-unknown :readers {'subscribe subscribe}}
    s))

(defn split [[o & rest]]
    (apply conj [((keyword o) components)] rest))

(defn translate-components [o]
  (walk/postwalk (fn [x]
    (if (vector? x)
        (split o)
        x)) o))

(defn body [r f]
  (.then r f))

(defn load-http [s f]
  (let [xhr (js/XMLHttpRequest.)]
    (.open xhr "GET" (str s "/main.edn") true)
    (.send xhr nil)
    (set! (.-onreadystatechange xhr)
          #(when (= (.-readyState xhr) 4)
             (f (.-response xhr))))))

(defn ipfs->map [o]
  {:content (.toString (get o "content") "utf8")})

(defn parse-ipfs-files [err o]
  (println "PARSE" o)
  (let [v (js->clj o)]
    (println (map ipfs->map v))))

(defn dump [err]
  (println "ERR" err)
  )

(defn load-ipfs [ipfs f]
    (let [o ((.-get (.-files ipfs)) "QmbXjFEF6WbxNb4gyZE3JkEGG3ur4fmDgvo5vsQvdy95vW")]
      (js/console.log ">>" o)))

(defn load-view [s]
  (-> s
      parse-view
      translate-components))

(def warn (js/console.warn.bind js/console))
(rf.loggers/set-loggers!
 {:warn (fn [& args]
          (cond
            (= "re-frame: overwriting" (first args)) nil
            :else (apply warn args)))})

(enable-console-print!)

(defn render [h]
  (println "RENDER" h)
;document.getElementById('myframe1').contentWindow.
  (let [frame (js/document.getElementById "frame")]
  (println "FRAME" frame)
  (println "doc" (aget frame "contentWindow") (.getElementById (aget frame "contentWindow" "document") "app") )
    (reagent/render h (.-body (aget frame "contentWindow" "document")))))

(defn ^:export run
  []
  (println "RUN")
  (rf/clear-subscription-cache!)
  (rf/dispatch-sync [:initialize])     ;; puts a value into application state

  (load-http "hello"
    #(-> %
         load-view
         render))

  #_
  (let [ipfs (js/Ipfs.)]
    (load-ipfs ipfs render)))