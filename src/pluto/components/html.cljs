(ns pluto.components.html)

(defn view [props & content]
  (into [:div props] content))

(defn button [props content]
  [:button props content])

(defn text [props content]
  [:span props content])

(def components {'view   view
                 'button button
                 'text   text})
