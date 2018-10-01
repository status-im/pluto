(ns pluto.reader.hooks-test
  (:require [clojure.test :refer [is deftest testing]]
            [pluto.reader.blocks :as blocks]
            [pluto.reader.errors :as errors]
            [pluto.reader.hooks :as hooks]))

#_
(deftest resolve-property

  (testing "View"
    (is (= {:errors [{:pluto.reader.errors/type  ::errors/missing-property-name
                      :pluto.reader.errors/value :view}]}
           (hooks/resolve-property {:type :view :name :view}
                                   {}
                                   {:capacities {:components {'text :text}}}
                                   {'views/id ['text {} ""]})))
    (is (= [:text {} ""]
           ((:data (hooks/resolve-property {:type :view :name :view}
                                           {:view 'views/id}
                                           {:capacities {:components {'text :text}}}
                                           {'views/id ['text {} ""]})) {})))
    (is (= [blocks/let-block {:env {'value "test"}}
            [:text {} 'value]]
           ((:data (hooks/resolve-property {:type :view :name :view}
                                           {:view 'views/id}
                                           {:capacities {:components {'text :text}}}
                                           {'views/id '(let [{value :value} properties] [text {} value])})) {:value "test"}))))
  (testing "Component"
    (is (= {:errors [{:pluto.reader.errors/type  ::errors/invalid-type-name
                      :pluto.reader.errors/value :component}]}
           (hooks/resolve-property {:type :component :name :component}
                                   {}
                                   {:capacities {}}
                                   {})))
    (is (= {:errors [{:pluto.reader.errors/type  ::errors/unknown-component
                      :pluto.reader.errors/value 'selector}]}
           (hooks/resolve-property {:type :component :name :component}
                                   {:component 'selector}
                                   {:capacities {:components {}}}
                                   {})))
    (is (= {:data "selector"}
           (hooks/resolve-property {:type :component :name :component}
                                   {:component 'selector}
                                   {:capacities {:components {'selector "selector"}}}
                                   {}))))
  (testing "Event"
    (is (= {:errors [{:pluto.reader.errors/type  ::errors/invalid-type-name
                      :pluto.reader.errors/value :event}]}
           (hooks/resolve-property {:type :event :name :event}
                                   {}
                                   {:capacities {}}
                                   {})))
    (is (= {:errors [{:pluto.reader.errors/type  ::errors/event-not-exposed
                      :pluto.reader.errors/value :set-in}]}
           (hooks/resolve-property {:type :event :name :event}
                                   {:event :set-in}
                                   {:capacities {:events #{}}}
                                   {})))
    (is (= {:data :set-in}
           (hooks/resolve-property {:type :event :name :event}
                                   {:event :set-in}
                                   {:capacities {:events #{:set-in}}}
                                   {}))))
  (testing "Query"
    (is (= {:errors [{:pluto.reader.errors/type  ::errors/invalid-type-name
                      :pluto.reader.errors/value :query}]}
           (hooks/resolve-property {:type :query :name :query}
                                   {}
                                   {:capacities {}}
                                   {})))
    (is (= {:errors [{:pluto.reader.errors/type  ::errors/query-not-exposed
                      :pluto.reader.errors/value :get-in}]}
           (hooks/resolve-property {:type :query :name :query}
                                   {:query :get-in}
                                   {:capacities {:queries #{}}}
                                   {})))
    (is (= {:data :get-in}
           (hooks/resolve-property {:type :query :name :query}
                                   {:query :get-in}
                                   {:capacities {:queries #{:get-in}}}
                                   {})))))

(defn- hooks [properties]
  {:main {:properties properties}})

(deftest parse
  (is (= [:text {} ""]
         ((get-in (hooks/parse {:capacities {:hooks      (hooks {:view :view})
                                             :components {'text :text}}}
                    {'views/main   ['text {} ""]
                     'hooks/main.a {:view    'views/main}})
                  [:data :hooks :main :a :parsed :view]) {})))
  (let [app-hooks (hooks {:name :string
                          :id   :keyword})]
    (is (= {:data {:hooks {:main {:a {:parsed   {:name    "name" 
                                                 :id      :keyword}
                                      :hook-ref (:main app-hooks)}}}}}
           (hooks/parse {:capacities {:hooks app-hooks}}
                        {'hooks/main.a {:name "name"
                                        :id :keyword}}))))
  (testing "Optional property"
    (let [app-hooks (hooks {:name :string :id :keyword})]
      (is (= {:data {:hooks {:main {:a {:parsed   {:name    "name"}
                                        :hook-ref (:main app-hooks)}}}}
              :errors [{::errors/type  ::errors/invalid-type-name
                        ::errors/value :id}]}
             (hooks/parse {:capacities {:hooks app-hooks}}
                          {'hooks/main.a {:name    "name"}}))))
    (is (= {:name "name"}
           (get-in (hooks/parse {:capacities {:hooks (hooks {:name :string :id? :keyword})}}
                                {'hooks/main.b {:name    "name"}})
                   [:data :hooks :main :b :parsed]))) 
    (is (= {:name "name"
            :id   :keyword}
           (get-in (hooks/parse {:capacities {:hooks (hooks {:name :string :id? :keyword})}}
                                {'hooks/main.a {:name    "name"
                                                :id      :keyword}})
                   [:data :hooks :main :a :parsed])))
    (is (not (:errors (hooks/parse {:capacities {:hooks (hooks {:name         :string
                                                                :suggestions? :view})}}
                                   {'hooks/main.a {:name "name"}})))))
  (testing "Complex property"
    (is (= {:name "name"
            :child {:name "name" :id :keyword}}
           (get-in (hooks/parse {:capacities {:hooks (hooks {:name :string :child {:name :string :id :keyword}})}}
                                {'hooks/main.a {:name    "name"
                                                :child   {:name "name" :id :keyword}}})
                   [:data :hooks :main :a :parsed])))
    (is (= {:name "name"
            :child {:name "name" :type :one}}
           (get-in (hooks/parse {:capacities {:hooks (hooks {:name :string :child {:name :string :type {:one-of #{:one :two :three}}}})}}
                                {'hooks/main.a {:name    "name"
                                                :child   {:name "name" :type :one}}})
                   [:data :hooks :main :a :parsed])))

    (is (= {:name "name"
            :children [{:name "name" :scopes [{:scope :one}]}
                       {:name "name" :scopes [{:scope :two}]}]}
           (get-in (hooks/parse {:capacities {:hooks (hooks {:name :string :children [{:name :string :scopes [{:scope {:one-of #{:one :two :three}}}]}]})}}
                                {'hooks/main.a {:name     "name"
                                                :children [{:name "name" :scopes [{:scope :one}]}
                                                           {:name "name" :scopes [{:scope :two}]}]}})
                   [:data :hooks :main :a :parsed])))))
