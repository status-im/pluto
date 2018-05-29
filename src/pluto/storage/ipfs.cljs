(ns pluto.storage.ipfs
  (:require [clojure.string :as string]
            [pluto.storage :as storage]))

(defn- ipfs->extension [ipfs-extension]
  {:extension-id (:Hash ipfs-extension)
   :name         (:Name ipfs-extension)})

(defn parse-directory [response]
  (when-not (string/blank? response)
    (->> (js->clj (js/JSON.parse response) :keywordize-keys true)
         :Objects
         first
         :Links
         (map ipfs->extension))))

(defn fetch-promise [url]
  (new js/Promise (fn [resolve reject]
                    (let [xhr (js/XMLHttpRequest.)]
                      (.open xhr "GET" url true)
                      (set! (.-timeout xhr) 2000)
                      (set! (.-ontimeout xhr) #(reject :timeout))
                      (.send xhr nil)
                      (set! (.-onload xhr)
                            #(resolve (.-responseText xhr)))))))

(defn list-all [gateway-url directory]
  (fetch-promise (str gateway-url "/api/v0/ls?arg=" directory)))

(defn fetch
  [gateway-url extension]
  (..
    (fetch-promise (str gateway-url "/api/v0/cat?arg=" (:extension-id extension)))
    (then (fn [content]
            (assoc extension :content content)))))

(defn fetch-all [gateway-url extensions]
  (let [promises (js/Promise.all (clj->js (mapv #(fetch gateway-url %) extensions)))]

   (.then promises
          #(js->clj % :keywordize-keys true))))

(defrecord IPFSStorage [gateway-url]
  storage/Storage
  (fetch [_ extension callback]
    (..
      (list-all gateway-url (:value extension))
      (then parse-directory)
      (then (partial fetch-all gateway-url))
      (then #(callback {:type :success :value %})
            #(callback {:type :error   :value %})))))
