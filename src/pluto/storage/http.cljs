(ns pluto.storage.http
  (:require [pluto.storage :as storage]))

(defn result [xhr]
  (let [status  (.-status xhr)
        content (.-responseText xhr) ]
    (if (= 200 status)
      {:type :success :value {:content content}}
      {:type :error :value {:status status :content content}})))

(def default-timeout 5000)

(defn get-url [url callback]
  (let [xhr (js/XMLHttpRequest.)]
    (set! (.-timeout xhr) default-timeout)
    (.open xhr "GET" url true)
    (.send xhr nil)
    (set! (.-onreadystatechange xhr)
          #(when (= (.-readyState xhr) 4)
             (callback (result xhr))))))

(deftype HTTPStorage []
  storage/Storage
  (fetch [_ {:keys [value]} callback]
    (get-url (str value "/extension.edn") callback)))
