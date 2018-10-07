(ns pluto.reader.hooks-test
  (:require [clojure.test :refer [is deftest testing]]
            [pluto.reader.blocks :as blocks]
            [pluto.reader.errors :as errors]
            [pluto.reader.hooks  :as hooks]
            [pluto.reader.views  :as views]))

(defn- hooks [properties]
  {:main {:properties properties}})

(deftest parse
  (is (= [:text {} ""]
         ((get-in (hooks/parse {:capacities {:hooks      (hooks {:view :view})
                                             :components {'text {:value :text}}}}
                    {'views/main   ['text {} ""]
                     'hooks/main.a {:view ['views/main]}})
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
      (is (= {:data {:hooks {:main {:a {:parsed   {:name "name"}
                                        :hook-ref (:main app-hooks)}}}}
              :errors [{::errors/type  ::errors/invalid-type-name
                        ::errors/value :id}]}
             (hooks/parse {:capacities {:hooks app-hooks}}
                          {'hooks/main.a {:name "name"}}))))
    (is (= {:name "name"}
           (get-in (hooks/parse {:capacities {:hooks (hooks {:name :string :id? :keyword})}}
                                {'hooks/main.b {:name "name"}})
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
