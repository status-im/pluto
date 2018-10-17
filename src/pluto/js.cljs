(ns pluto.js
  "Exports reader function to JavaScript hosts.
   Type conversion is properly handled."
  (:require [pluto.reader :as reader]))

(defn ^:export to-clj [o]
  (js->clj o))

(defn ^:export from-clj [o]
  (clj->js o))

(defn component [])

;; TODO find a syntax so that :event can define associated types they will be injected

(def ctx
  {:capacities {:components {'button {:value component :properties {:on-click :event}}
                             'text-input         {:value component}
                             'text {:value component} 'view {:value component} 'token-selector {:value component} 'asset-selector {:value component}
                             'transaction-status {:value component :properties {:outgoing :string :tx-hash :string}}
                             'nft-token-viewer {:value component :properties {:token :string}}}
                :queries {'get-collectible-token {:value :get-collectible-token :arguments {:token :string :symbol :string}}
                          'store/get {:value :store/get :arguments {:key :string}}}
                :events     {'alert
                             {:permissions [:read]
                              :value       :alert
                              :arguments   {:value :string}}
                             'log
                             {:permissions [:read]
                              :value       :log
                              :arguments   {:value :string}}
                             'store/put
                             {:permissions [:read]
                              :value       :store/put
                              :arguments   {:key :string :value :string}}
                             'http/get
                             {:permissions [:read]
                              :value       :http/get
                              :arguments   {:url         :string
                                            :on-success  :event
                                            :on-failure? :event
                                            :timeout?    :string}}
                             'browser/open {:value  :browser/open :arguments {:url :string}}
                             'chat/open {:value  :chat/open :arguments {:url :string}}
                             'ethereum/sign
                             {:arguments
                              {:account   :string
                               :message   :string
                               :on-result :event}}
                             'ethereum/send-raw-transaction
                             {:arguments {:data :string}}
                             'ethereum/send-transaction
                             {:arguments
                              {:from       :string
                               :to         :string
                               :gas?       :string
                               :gas-price? :string
                               :value?     :string
                               :data?      :string
                               :nonce?     :string}}
                             'ethereum/new-contract
                             {:arguments
                              {:from       :string
                               :gas?       :string
                               :gas-price? :string
                               :value?     :string
                               :data?      :string
                               :nonce?     :string}}
                             'ethereum/call
                             {:arguments
                              {:from?      :string
                               :to         :string
                               :gas?       :string
                               :gas-price? :string
                               :value?     :string
                               :data?      :string
                               :block      :string}}

                             'ethereum/logs
                             {:arguments
                              {:from?     :string
                               :to        :string
                               :address   :string
                               :topics    :string
                               :blockhash :string}}}
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
