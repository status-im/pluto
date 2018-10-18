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
  {:capacities {:components {'view               {:value component}
                             'text               {:value component}
                             'touchable-opacity  {:value component :properties {:on-press :event}}
                             'image              {:value component :properties {:uri :string}}
                             'input              {:value component :properties {:on-change :event :placeholder :string}}
                             'button             {:value component :properties {:on-click :event}}
                             'link               {:value component :properties {:uri :string}}
                             'list               {:value component :properties {:data :vector :item-view :view}}
                             'checkbox           {:value component :properties {:on-change? :event :checked? :boolean}}
                             'nft-token-viewer   {:value component :properties {:token :string}}
                             'transaction-status {:value component :properties {:outgoing :string :tx-hash :string}}
                             'asset-selector     {:value component}
                             'token-selector     {:value component}}
                :queries {'wallet/collectibles {:value :get-collectible-token :arguments {:token :string :symbol :string}}
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
                             'store/append
                             {:permissions [:read]
                              :value       :store/append
                              :arguments   {:key :string :value :string}}
                             'store/clear
                             {:permissions [:read]
                              :value       :store/put
                              :arguments   {:key :string}}
                             'http/get
                             {:permissions [:read]
                              :value       :http/get
                              :arguments   {:url         :string
                                            :timeout?    :string
                                            :on-success  :event
                                            :on-failure? :event}}
                             'http/post
                             {:permissions [:read]
                              :value       :http/post
                              :arguments   {:url         :string
                                            :body        :string
                                            :timeout?    :string
                                            :on-success  :event
                                            :on-failure? :event}}
                             'ipfs/cat
                             {:permissions [:read]
                              :value       :ipfs/cat
                              :arguments   {:hash        :string
                                            :on-success  :event
                                            :on-failure? :event}}
                             'ethereum/sign
                             {:arguments
                              {:account   :string
                               :message   :string
                               :on-result :event}}
                             'ethereum/send-transaction
                             {:arguments
                              {:from       :string
                               :to         :string
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
