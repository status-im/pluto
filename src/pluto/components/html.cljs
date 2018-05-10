(ns pluto.components.html)

(defn view [props & content]
  (into [:div props] content))

(defn button [props & content]
  (into [:button props] content))

(defn text [props & content]
  (into [:span props] content))

(def components {'view   view
                 'button button
                 'text   text})
