(ns pluto.reader.types-test
  (:refer-clojure :exclude [resolve])
  (:require [clojure.test :refer [is deftest testing]]
            [pluto.error        :as error]
            [pluto.reader.types :as types]))

#_
(deftest resolve-primitive
  (is (= {:errors [{::error/type  ::error/invalid-type
                    ::error/value {:type :unknown}}]}
         (types/resolve {} {} :unknown nil)))
  (testing "Any"
           (is (= {:data "value"} (types/resolve {} {} :any "value")))
           (is (= {:data 1} (types/resolve {} {} :any 1))))
  (testing "String"
    (is (= {:errors [{::error/type  ::error/invalid-type-value
                      ::error/value {:type :string :data nil}}]}
           (types/resolve {} {} :string nil)))
    (is (= {:errors [{::error/type  ::error/invalid-type-value
                      ::error/value {:type :string :data :value}}]}
           (types/resolve {} {} :string :value)))
    (is (= {:data "value"}
           (types/resolve {} {} :string "value"))))
  (testing "Keyword"
    (is (= {:errors [{::error/type  ::error/invalid-type-value
                      ::error/value {:type :keyword :value nil}}]}
           (types/resolve {} {} :keyword nil)))
    (is (= {:errors [{::error/type  ::error/invalid-type-value
                      ::error/value {:type :keyword :value "value"}}]}
           (types/resolve {} {} :keyword "value")))
    (is (= {:data :value}
           (types/resolve {} {} :keyword :value))))
  (testing "Boolean"
    (is (= {:errors [{::error/type  ::error/invalid-type-value
                      ::error/value {:type :boolean :value nil}}]}
           (types/resolve {} {} :boolean nil)))
    (is (= {:errors [{::error/type  ::error/invalid-type-value
                      ::error/value {:type :boolean :value "value"}}]}
           (types/resolve {} {} :boolean "value")))
    (is (= {:data true}
           (types/resolve {} {} :boolean true))))
  (testing "Number"
    (is (= {:errors [{::error/type  ::error/invalid-type-value
                      ::error/value {:type :number :value nil}}]}
           (types/resolve {} {} :number nil)))
    (is (= {:errors [{::error/type  ::error/invalid-type-value
                      ::error/value {:type :number :value "value"}}]}
           (types/resolve {} {} :number "value")))
    (is (= {:data 1}
           (types/resolve {} {} :number 1)))
    (is (= {:data 1.0}
           (types/resolve {} {} :number 1.0))))
  (testing "Map"
    (is (= {:errors [{::error/type  ::error/invalid-type-value
                      ::error/value {:type :map :value nil}}]}
           (types/resolve {} {} :map nil)))
    (is (= {:errors [{::error/type  ::error/invalid-type-value
                      ::error/value {:type :map :value "value"}}]}
           (types/resolve {} {} :map "value")))
    (is (= {:data {}}
           (types/resolve {} {} :map {}))))
  (testing "Vector"
    (is (= {:errors [{::error/type  ::error/invalid-type-value
                      ::error/value {:type :vector :value nil}}]}
           (types/resolve {} {} :vector nil)))
    (is (= {:errors [{::error/type  ::error/invalid-type-value
                      ::error/value {:type :vector :value "value"}}]}
           (types/resolve {} {} :vector "value")))
    (is (= {:data []}
           (types/resolve {} {} :vector []))))
  (testing "Subset"
    (is (= {:errors [{::error/type  ::error/invalid-type-value
                      ::error/value {:type :subset :value nil}}]}
           (types/resolve {} {} #{"a" "b" "c"} nil)))
    (is (= {:errors [{::error/type  ::error/invalid-type-value
                      ::error/value {:type :subset :value "value"}}]}
           (types/resolve {} {} #{"a" "b" "c"} "value")))
    (is (= {:errors [{::error/type  ::error/invalid-type-value
                      ::error/value {:type :subset :value "value"}}]}
           (types/resolve {} {} #{"a" "b" "c"} "value")))
    (is (= {:data #{"a"}}
           (types/resolve {} {} #{"a" "b" "c"} #{"a"}))))
  (testing "One of"
    (is (= {:errors [{::error/type  ::error/invalid-type-value
                      ::error/value {:type :one-of :value nil}}]}
           (types/resolve {} {} {:one-of #{:one :two :three}} nil)))
    (is (= {:errors [{::error/type  ::error/invalid-type-value
                      ::error/value {:type :one-of :value :for}}]}
           (types/resolve {} {} {:one-of #{:one :two :three}} :for)))
    (is (= {:errors [{::error/type  ::error/invalid-type-value
                      ::error/value {:type :one-of :value "one"}}]}
           (types/resolve {} {} {:one-of #{:one :two :three}} "one")))
    (is (= {:data :one}
           (types/resolve {} {} {:one-of #{:one :two :three}} :one))))
  (testing "Or"
    (is (= {:errors [{::error/type  ::error/invalid-type-value
                      ::error/value {:type :or :value nil}}]}
           (types/resolve {} {} {:or [:keyword #{:one :two :three}]} nil)))
    (is (= {:data :one}
           (types/resolve {} {} {:or [:keyword #{:one :two :three}]} :one)))))

#_
(deftest resolve-sequential
  (is (= {:errors [{::error/type  ::error/invalid-sequential-type
                    ::error/value {:type [:string] :value ["value"]}}]}
         (types/resolve {} {} [:string] ["value"])))
  (is (= {:errors [{::error/type  ::error/invalid-sequential-type
                    ::error/value {:type [{:name :string} {:name :string}] :value ["value"]}}]}
       (types/resolve {} {} [{:name :string} {:name :string}] ["value"])))
  (is (= {:data [{:name "name"}
                 {:name "name"}]}
         (types/resolve {} {} [{:name :string}]
                              [{:name "name"}
                               {:name "name"}])))
  (is (= {:data [{:name "name" :scopes [{:scope :one}]}
                 {:name "name" :scopes [{:scope :two}]}]}
         (types/resolve {} {} [{:name :string :scopes [{:scope {:one-of #{:one :two :three}}}]}]
                              [{:name "name" :scopes [{:scope :one}]}
                               {:name "name" :scopes [{:scope :two}]}]))))
#_
(deftest resolve-assoc
  (is (= {:data {:name "value"}}
         (types/resolve {} {} {:name :string} {:name "value"})))
  (is (= {:data {:name "value"}}
         (types/resolve {} {} {:name? :string} {:name "value"})))
  (is (= {:data {}}
         (types/resolve {} {} {:name? :string} {})))
  (is (= {:errors [{::error/type  ::error/invalid-type-value
                    ::error/value {:type :string :value nil}}]}
         (types/resolve {} {} {:name? :string} {:name nil})))
  (is (= {:data {}}
         (types/resolve {} {} {:name? :string} {:extra "value"})))
  (is (= {:data {:scopes [{:scope :one}]}}
         (types/resolve {} {} {:scopes [{:scope {:one-of #{:one :two :three}}}]}
                             {:scopes [{:scope :one}]})))
  (is (= {:data {:students [{:firstname "John" :lastname "Doe"}]}}
         (types/resolve {} {} {:students [{:firstname :string :lastname :string :name? :string}]}
                              {:students [{:firstname "John" :lastname "Doe"}]})))
  (is (= '[text]
         (let [m (types/resolve {} '{views/screen [text]} {:screen :view :students [{:firstname :string :lastname :string :name? :string}]}
                                   {:screen ['screen] :students [{:firstname "John" :lastname "Doe"}]})]
           ((get-in m [:data :screen]) {}))))
  (is (= '[text]
         (let [m (types/resolve {} '{views/screen [text]} {:screen? :view :students [{:firstname :string :lastname :string :name? :string}]}
                                   {:screen ['screen] :students [{:firstname "John" :lastname "Doe" :name "Henry"}]})]
           ((get-in m [:data :screen]) {}))))
  (is (= {:data {:name     "hello"
                 :children [{:name "name" :scopes [{:scope :one}]}
                            {:name "name" :scopes [{:scope :two}]}]}}
         (types/resolve {} {} {:name?    :string
                               :children [{:name :string :scopes [{:scope {:one-of #{:one :two :three}}}]}]}
                              {:extra    "value"
                               :name     "hello"
                               :children [{:name "name" :scopes [{:scope :one}]}
                                          {:name "name" :scopes [{:scope :two}]}]}))))

#_
(deftest resolve-reference
  (is (= {:errors [{::error/type  ::error/unknown-event
                    ::error/value 'event}
                   {::error/type  ::error/unknown-reference
                    ::error/value {:value 'event :type :event}}]}
         (types/resolve {} {} :event ['event])))
  (let [{:keys [data errors]} (types/resolve {:capacities {:events {'event {:value :event}}}} {} :event ['event])]
    (is (not errors))
    (is data))
  (let [{:keys [data errors]} (types/resolve {:capacities {:events {'event {:value :event :arguments {:on-finished? :event}}}}}
                                             {} :event ['event {:on-finished ['event]}])]
    (is (not errors))
    (is (fn? (:on-finished (last (data {} {}))))))
  (let [{:keys [data errors]} (types/resolve {:capacities {:events {'alert {:value :alert :arguments {:value :string}}}}}
                                             {'events/event '(let [{value :value} properties] [alert {:value value}])}
                                             :event ['event {:value {:key "value"}}])]
    (is (not errors))
    (is (= [:alert nil {:value {:key "value"}}] (data {} {:value {:key2 "value2"}})))))
