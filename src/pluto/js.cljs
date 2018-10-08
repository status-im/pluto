(ns pluto.js
  "Exports reader function to JavaScript hosts.
   Type conversion is properly handled."
  (:require [pluto.reader :as reader]))

(defn ^:export to-clj [o]
  (js->clj o))

(defn ^:export from-clj [o]
  (clj->js o))

(def ctx
  {:capacities {:components {'text {:value :text} 'view {:value :div} 'token-selector {:value :div} 'asset-selector {:value :div}
                             'send-status {:value :div} 'nft-token {:value :div}}
                :hooks {:commands {:properties {:scope         #{:personal-chats :public-chats}
                                                :description   :string
                                                :short-preview :view
                                                :preview       :view
                                                :parameters    [{:id           :keyword
                                                                  :type         {:one-of #{:text :phone :password :number}}
                                                                  :placeholder  :string
                                                                  :suggestions? :view}]}}}}})

(defn ^:export parse [m]
  (reader/parse ctx (:data m)))
