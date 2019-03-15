(ns pluto.js
  "Exports reader function to JavaScript hosts.
   Type conversion is properly handled."
  (:require [pluto.core :as pluto]))

(defn ^:export to-clj [o]
  (js->clj o))

(defn ^:export from-clj [o]
  (clj->js o))

(defn component [])

;; TODO find a syntax so that :event can define associated types they will be injected

(def ctx
  {:capacities {:components {'view                   {:data component}
                             'scroll-view            {:data component :properties {:keyboard-should-persist-taps :keyword :content-container-style :map}}
                             'keyboard-avoiding-view {:data component}
                             'text                   {:data component}
                             'touchable-opacity      {:data component :properties {:on-press :event}}
                             'icon                   {:data component :properties {:key :keyword :color :any}}
                             'image                  {:data component :properties {:uri :string :source :string}}
                             'input                  {:data component :properties {:on-change :event :placeholder :string :keyboard-type :keyword :change-delay? :number :placeholder-text-color :any :selection-color :any}}
                             'button                 {:data component :properties {:enabled :boolean :disabled :boolean :on-click :event}}
                             'link                   {:data component :properties {:uri :string}}
                             'list                   {:data component :properties {:data :vector :item-view :view :key? :keyword}}
                             'checkbox               {:data component :properties {:on-change :event :checked :boolean}}
                             'activity-indicator     {:data component :properties {:animating :boolean :color :string :size :keyword :hides-when-stopped :boolean}}
                             'picker                 {:data component :properties {:on-change :event :selected :string :enabled :boolean :data :vector}}
                             'nft-token-viewer       {:data component :properties {:token :string}}
                             'transaction-status     {:data component :properties {:outgoing :string :tx-hash :string}}}
                :queries {'identity            {:data :extensions/identity :arguments {:value :map}}
                          'store/get           {:data :store/get :arguments {:key :string}}
                          'wallet/collectibles {:data :get-collectible-token :arguments {:token :string :symbol :string}}
                          'wallet/balance      {:data :extensions.wallet/balance :arguments {:token :string}}
                          'wallet/token        {:data :extensions.wallet/token :arguments {:token :string :amount? :number :amount-in-wei? :number}}
                          'wallet/tokens       {:data :extensions.wallet/tokens :arguments {:filter? :vector :visible? :boolean}}}
                :events     {'identity
                             {:permissions [:read]
                              :data        :extensions/identity-event
                              :arguments   {:cb :event}}
                             'alert
                             {:permissions [:read]
                              :data        :alert
                              :arguments   {:value :string}}
                             'selection-screen
                             {:permissions [:read]
                              :data        :extensions/show-selection-screen
                              :arguments   {:items :vector :on-select :event :render :view :title :string :extractor-key :keyword}}
                             'chat.command/set-parameter
                             {:permissions [:read]
                              :data        :extensions.chat.command/set-parameter
                              :arguments   {:value :any}}
                             'chat.command/set-custom-parameter
                             {:permissions [:read]
                              :data        :extensions.chat.command/set-custom-parameter
                              :arguments   {:key :keyword :value :any}}
                             'chat.command/set-parameter-with-custom-params
                             {:permissions [:read]
                              :data        :extensions.chat.command/set-parameter-with-custom-params
                              :arguments   {:value :string :params :map}}
                             'chat.command/send-plain-text-message
                             {:permissions [:read]
                              :data        :extensions.chat.command/send-plain-text-message
                              :arguments   {:value :string}}
                             'chat.command/send-message
                             {:permissions [:read]
                              :data        :extensions.chat.command/send-message
                              :arguments   {:params :map}}
                             'log
                             {:permissions [:read]
                              :data        :log
                              :arguments   {:value :string}}
                             'arithmetic
                             {:permissions [:read]
                              :data        :extensions/arithmetic
                              :arguments   {:values    :vector
                                            :operation {:one-of #{:plus :minus :times :divide}}
                                            :on-result :event}}
                             'schedule/start
                             {:permissions [:read]
                              :data        :extensions/schedule-start
                              :arguments   {:interval   :number
                                            :on-created :event
                                            :on-result  :event}}
                             'schedule/cancel
                             {:permissions [:read]
                              :data        :extensions/schedule-cancel
                              :arguments   {:value      :number}}
                             'json/parse
                             {:permissions [:read]
                              :data        :extensions/json-parse
                              :arguments   {:value     :string
                                            :on-result :event}}
                             'json/stringify
                             {:permissions [:read]
                              :data        :extensions/json-stringify
                              :arguments   {:value     :string
                                            :on-result :event}}
                             'store/put
                             {:permissions [:read]
                              :data        :store/put
                              :arguments   {:key :string :value :any}}
                             'store/puts
                             {:permissions [:read]
                              :data        :store/puts
                              :arguments   {:value :vector}}
                             'store/append
                             {:permissions [:read]
                              :data        :store/append
                              :arguments   {:key :string :value :any}}
                             'store/clear
                             {:permissions [:read]
                              :data        :store/clear
                              :arguments   {:key :string}}
                             'store/clear-all
                             {:permissions [:read]
                              :data        :store/clear-all}
                             'http/get
                             {:permissions [:read]
                              :data        :http/get
                              :arguments   {:url         :string
                                            :timeout?    :string
                                            :on-success  :event
                                            :on-failure? :event}}
                             'http/post
                             {:permissions [:read]
                              :data        :http/post
                              :arguments   {:url         :string
                                            :body        :string
                                            :timeout?    :string
                                            :on-success  :event
                                            :on-failure? :event}}
                             'ipfs/cat
                             {:permissions [:read]
                              :data        :ipfs/cat
                              :arguments   {:hash        :string
                                            :on-success  :event
                                            :on-failure? :event}}
                             'ipfs/add
                             {:permissions [:read]
                              :data        :ipfs/add
                              :arguments   {:value       :string
                                            :on-success  :event
                                            :on-failure? :event}}
                             'ethereum/transaction-receipt
                             {:permissions [:read]
                              :data        :extensions/ethereum-transaction-receipt
                              :arguments   {:value       :string
                                            :on-success  :event
                                            :on-failure? :event}}
                             'ethereum/await-transaction-receipt
                             {:permissions [:read]
                              :data        :extensions/ethereum-await-transaction-receipt
                              :arguments   {:value       :string
                                            :interval    :number
                                            :on-success  :event
                                            :on-failure? :event}}
                             'ethereum/sign
                             {:permissions [:read]
                              :data        :extensions/ethereum-sign
                              :arguments   {:message?    :string
                                            :data?       :string
                                            :on-success  :event
                                            :on-failure? :event}}
                             'ethereum/create-address
                             {:permissions [:read]
                              :data        :extensions/ethereum-create-address
                              :arguments   {:on-result  :event}}
                             'ethereum/send-transaction
                             {:permissions [:read]
                              :data        :extensions/ethereum-send-transaction
                              :arguments   {:to          :string
                                            :gas?        :string
                                            :gas-price?  :string
                                            :value?      :string
                                            :method?     :string
                                            :params?     :vector
                                            :nonce?      :string
                                            :on-success  :event
                                            :on-failure? :event}}
                             'ethereum/logs
                             {:permissions [:read]
                              :data        :extensions/ethereum-logs
                              :arguments   {:from?       :string
                                            :to?         :string
                                            :address?    :vector
                                            :topics?     :vector
                                            :block-hash? :string
                                            :on-success  :event
                                            :on-failure? :event}}
                             'ethereum/create-filter
                             {:permissions [:read]
                              :data        :extensions/ethereum-create-filter
                              :arguments   {:type        {:one-of #{:filter :block :pending-transaction}}
                                            :from?       :string
                                            :to?         :string
                                            :address?    :vector
                                            :topics?     :vector
                                            :block-hash? :string
                                            :on-success  :event
                                            :on-failure? :event}}
                             'ethereum/logs-changes
                             {:permissions [:read]
                              :data        :extensions/ethereum-logs-changes
                              :arguments   {:id :string}}
                             'ethereum/cancel-filter
                             {:permissions [:read]
                              :data        :extensions/ethereum-cancel-filter
                              :arguments   {:id  :string}}
                             'ethereum.ens/resolve
                             {:permissions [:read]
                              :data        :extensions/ethereum-resolve-ens
                              :arguments   {:name        :string
                                            :on-success  :event
                                            :on-failure? :event}}
                             'ethereum.erc20/total-supply
                             {:permissions [:read]
                              :data        :extensions/ethereum-erc20-total-supply
                              :arguments   {:contract     :string
                                            :on-success   :event
                                            :on-failure?  :event}}
                             'ethereum.erc20/balance-of
                             {:permissions [:read]
                              :data        :extensions/ethereum-erc20-balance-of
                              :arguments   {:contract     :string
                                            :token-owner  :string
                                            :on-success   :event
                                            :on-failure?  :event}}
                             'ethereum.erc20/transfer
                             {:permissions [:read]
                              :data        :extensions/ethereum-erc20-transfer
                              :arguments   {:contract    :string
                                            :to          :string
                                            :value       :number
                                            :on-success  :event
                                            :on-failure? :event}}
                             'ethereum.erc20/transfer-from
                             {:permissions [:read]
                              :data        :extensions/ethereum-erc20-transfer-from
                              :arguments   {:contract    :string
                                            :from        :string
                                            :to          :string
                                            :value       :number
                                            :on-success  :event
                                            :on-failure? :event}}
                             'ethereum.erc20/approve
                             {:permissions [:read]
                              :data        :extensions/ethereum-erc20-approve
                              :arguments   {:contract    :string
                                            :spender     :string
                                            :value       :number
                                            :on-success  :event
                                            :on-failure? :event}}
                             'ethereum.erc20/allowance
                             {:permissions [:read]
                              :data        :extensions/ethereum-erc20-allowance
                              :arguments   {:contract     :string
                                            :token-owner  :string
                                            :spender      :string
                                            :on-success  :event
                                            :on-failure? :event}}
                             'ethereum.erc721/owner-of
                             {:permissions [:read]
                              :data        :extensions/ethereum-erc721-owner-of
                              :arguments   {:contract    :string
                                            :token-id    :string
                                            :on-success  :event
                                            :on-failure? :event}}
                             'ethereum.erc721/is-approved-for-all
                             {:permissions [:read]
                              :data        :extensions/ethereum-erc721-is-approved-for-all
                              :arguments   {:contract    :string
                                            :owner       :string
                                            :operator    :string
                                            :on-success  :event
                                            :on-failure? :event}}
                             'ethereum.erc721/get-approved
                             {:permissions [:read]
                              :data        :extensions/ethereum-erc721-get-approved
                              :arguments   {:contract    :string
                                            :token-id    :string
                                            :on-success  :event
                                            :on-failure? :event}}
                             'ethereum.erc721/set-approval-for-all
                             {:permissions [:read]
                              :data        :extensions/ethereum-erc721-set-approval-for-all
                              :arguments   {:contract    :string
                                            :operator    :string
                                            :approved    :boolean
                                            :on-success  :event
                                            :on-failure? :event}}
                             'ethereum.erc721/safe-transfer-from
                             {:permissions [:read]
                              :data        :extensions/ethereum-erc721-safe-transfer-from
                              :arguments   {:contract    :string
                                            :from        :string
                                            :to          :string
                                            :token-id    :string
                                            :data?       :string
                                            :on-success  :event
                                            :on-failure? :event}}
                             'ethereum/call
                             {:permissions [:read]
                              :data        :extensions/ethereum-call
                              :arguments   {:to          :string
                                            :method      :string
                                            :params?     :vector
                                            :outputs?    :vector
                                            :on-success  :event
                                            :on-failure? :event}}}
                :hooks {:wallet.settings {:properties {:label     :string
                                                       :view      :view
                                                       :on-click? :event}}
                        :chat.command {:properties {:description?  :string
                                                    :scope         #{:personal-chats :public-chats}
                                                    :short-preview :view
                                                    :preview       :view
                                                    :parameters?    [{:id           :keyword
                                                                      :type         {:one-of #{:text :phone :password :number}}
                                                                      :placeholder  :string
                                                                      :suggestions? :view}]
                                                    :on-send?      :event
                                                    :on-send-sync? :event
                                                    :on-receive?   :event}}}}})

(defn ^:export read [s]
  (pluto/read s))

(defn ^:export parse [m]
  (pluto/parse ctx (:data m)))
