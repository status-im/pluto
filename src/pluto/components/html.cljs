(ns pluto.components.html
  (:require [re-frame.core :as re-frame]))

(defn view [props & content]
  ;;(println "VVVVV"  content)
  (into [:div props] content))

(defn button [{:keys [on-click]} & content]
  (into [:button {:on-click #(re-frame/dispatch (on-click {:value "ON CLICK"}))}] content))

(defn text [props & content]
  (into [:span props] content))

(def components {'view   {:properties {}
                          :value      view
                          :description ""
                          :examples   []}
                 'button {:properties {:on-click :event}
                          :value      button
                          :examples   []}
                 'text   {:properties {}
                          :value      text
                          :examples   []}})
