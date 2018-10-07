(ns pluto.storages
  (:require [clojure.string     :as string]
            [pluto.storage      :as storage]
            [pluto.storage.http :as http]
            [pluto.storage.gist :as gist]
            [pluto.storage.ipfs :as ipfs]))

(def all
  {"url"  (http/HTTPStorage.)
   "gist" (gist/GistStorage.)
   "ipfs" (ipfs/IPFSStorage.)})

(defn fetch [uri cb]
  (when (and uri cb)
    (let [[type id] (string/split uri "@")]
      (when-let [s (get all type)]
        (storage/fetch
          s
          {:value id} cb)))))
