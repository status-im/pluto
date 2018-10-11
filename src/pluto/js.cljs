(ns pluto.js
  "Exports reader function to JavaScript hosts.
   Type conversion is properly handled."
  (:require [pluto.reader :as reader]))

(defn ^:export to-clj [o]
  (js->clj o))

(defn ^:export from-clj [o]
  (clj->js o))

(defn component [])

(def ctx
  {:capacities {:components {'text {:value component} 'view {:value component} 'token-selector {:value component} 'asset-selector {:value component}
                             'send-status {:value component} 'nft-token {:value component}}
                :queries {'get-collectible-token {:value :get-collectible-token}}
                :hooks {:commands {:properties {:scope         #{:personal-chats :public-chats}
                                                :short-preview :view
                                                :preview       :view
                                                :parameters    [{:id           :keyword
                                                                  :type         {:one-of #{:text :phone :password :number}}
                                                                  :placeholder  :string
                                                                  :suggestions? :view}]}}}}})

(defn ^:export parse [m]
  (reader/parse ctx (:data m)))
