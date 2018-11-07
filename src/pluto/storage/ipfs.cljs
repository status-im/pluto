(ns pluto.storage.ipfs
  (:require [clojure.string :as string]
            [pluto.storage  :as storage]))

(defn result [xhr]
  (let [status  (.-status xhr)
        content (.-responseText xhr) ]
       (if (= 200 status)
         {:type :success :value {:content content}}
         {:type :error :value {:status status :content content}})))

;; TODO Handle all edn files types, not only extension.edn

(defn infura-url [hash]
  (str "https://ipfs.infura.io/ipfs/" hash))

(deftype IPFSStorage []
  storage/Storage
  (fetch [_ {:keys [value]} callback]
    (let [xhr (js/XMLHttpRequest.)]
      (set! (.-timeout xhr) 5000)
      (.open xhr "GET" (infura-url value) true)
      (.send xhr nil)
      (set! (.-onreadystatechange xhr)
            #(when (= (.-readyState xhr) 4)
               (callback (result xhr)))))))
