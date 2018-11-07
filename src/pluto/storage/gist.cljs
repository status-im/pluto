(ns pluto.storage.gist
  (:require [pluto.storage :as storage]))

(defn result [xhr]
  (let [status (.-status xhr)]
    (if (= 404 status)
      {:type :error :value status}
      {:type :success :value {:content (.-responseText xhr)}})))

;; TODO Handle all edn files types, not only extension.edn

(defn gist-url [id]
  (str "https://gist.githubusercontent.com/" id "/raw"))

(deftype GistStorage []
  storage/Storage
  (fetch [_ {:keys [value]} callback]
    (let [xhr (js/XMLHttpRequest.)]
      (.open xhr "GET" (gist-url value) true)
      (.send xhr nil)
      (set! (.-onreadystatechange xhr)
            #(when (= (.-readyState xhr) 4)
               (callback (result xhr)))))))
