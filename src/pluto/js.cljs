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
  {:capacities {:components {'button {:value component :properties {:on-click :event}}
                             'text-input         {:value component}
                             'text {:value component} 'view {:value component} 'token-selector {:value component} 'asset-selector {:value component}
                             'transaction-status {:value component :properties {:outgoing :string :tx-hash :string}}
                             'nft-token-viewer {:value component :properties {:token :string}}}
                :queries {'get-collectible-token {:value :get-collectible-token}
                          'store/get {:value :store/get}}
                :events     {'alert
                             {:permissions [:read]
                              :value       :alert}
                             'log
                             {:permissions [:read]
                              :value       :log}
                             'store/put
                             {:permissions [:read]
                              :value       :store/put}
                             'http/get
                             {:permissions [:read]
                              :value       :http/get}}
                :hooks {:commands {:properties {:description?  :string
                                                :scope         #{:personal-chats :public-chats}
                                                :short-preview :view
                                                :preview       :view
                                                :parameters    [{:id           :keyword
                                                                  :type         {:one-of #{:text :phone :password :number}}
                                                                  :placeholder  :string
                                                                  :suggestions? :view}]
                                                :on-send?      :event
                                                :on-receive?   :event}}}}})

(defn ^:export parse [m]
  (reader/parse ctx (:data m)))
