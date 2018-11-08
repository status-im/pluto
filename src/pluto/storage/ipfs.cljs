(ns pluto.storage.ipfs
  (:require [pluto.storage      :as storage]
            [pluto.storage.http :as http]))

(defn infura-url [hash]
  (str "https://ipfs.infura.io/ipfs/" hash))

(deftype IPFSStorage []
  storage/Storage
  (fetch [_ {:keys [value]} callback]
    (http/get-url (infura-url value) callback)))
