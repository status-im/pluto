(ns pluto.storage.http
  (:require [pluto.storage :as storage]))

(deftype HTTPStorage []
  storage/Storage
  (fetch [_ id callback]
    (let [xhr (js/XMLHttpRequest.)]
      (.open xhr "GET" (:URL id) true)
      (.send xhr nil)
      (set! (.-onreadystatechange xhr)
            #(when (= (.-readyState xhr) 4)
               (callback (.-response xhr)))))))
