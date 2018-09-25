(ns pluto.storage.ipfs
  (:require [clojure.string :as string]
            [pluto.storage :as storage]))

(defn result [xhr]
  (let [status (.-status xhr)]
    (if (= 404 status)
      {:type :error :value status}
      {:type :success :value [{:content (.-responseText xhr)}]})))

;; TODO Handle all edn files types, not only extension.edn

(defn infura-url [hash]
  (str "https://ipfs.infura.io/ipfs/" hash))

(deftype IPFSStorage []
  storage/Storage
  (fetch [_ {:keys [value]} callback]
    (let [xhr (js/XMLHttpRequest.)]
      (.open xhr "GET" (infura-url value) true)
      (.send xhr nil)
      (set! (.-onreadystatechange xhr)
            #(when (= (.-readyState xhr) 4)
               (callback (result xhr)))))))
