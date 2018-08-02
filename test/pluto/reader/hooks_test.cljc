(ns pluto.reader.hooks-test
  (:require [clojure.test :refer [is deftest testing]]
            [pluto.reader.blocks :as blocks]
            [pluto.reader.errors :as errors]
            [pluto.reader.hooks :as hooks]))

(deftest resolve-property
  (testing "String"
    (is (= {:errors [{::errors/type ::errors/invalid-property-type
                      ::errors/value :unknown}]}
           (hooks/resolve-property {:name :string :type :unknown} {:string "value"} {} {})))
    (is (= {:errors [{::errors/type ::errors/invalid-property-name
                      ::errors/value :string}]}
           (hooks/resolve-property {:name :string :type :string} {:unknown "value"} {} {})))
    (is (= {:data "value"} (hooks/resolve-property {:name :string :type :string} {:string "value"} {} {})))
    (is (= {:errors [{::errors/type ::errors/invalid-property-value
                      ::errors/value 1}]}
           (hooks/resolve-property {:name :string :type :string} {:string 1} {} {}))))
  (testing "Keyword"
    (is (= {:data :value} (hooks/resolve-property {:name :keyword :type :keyword} {:keyword :value} {} {})))
    (is (= {:errors [{::errors/type ::errors/invalid-property-value
                      ::errors/value 1}]}
           (hooks/resolve-property {:name :keyword :type :keyword} {:keyword 1} {} {}))))
  (testing "View"
    (is (= {:errors [{:pluto.reader.errors/type  ::errors/missing-property-name
                      :pluto.reader.errors/value :view}]}
           (hooks/resolve-property {:type :view :name :view}
                                   {}
                                   {:capacities {:components {'text :text}}}
                                   {'views/id ['text {} ""]})))
    (is (= [:text {} ""]
           ((:data (hooks/resolve-property {:type :view :name :view}
                                           {:view '@views/id}
                                           {:capacities {:components {'text :text}}}
                                           {'views/id ['text {} ""]})) {})))
    (is (= [blocks/let-block {:env {'value "test"}}
            [:text {} 'value]]
           ((:data (hooks/resolve-property {:type :view :name :view}
                                           {:view '@views/id}
                                           {:capacities {:components {'text :text}}}
                                           {'views/id '(let [{value :value} @properties] [text {} value])})) {:value "test"}))))
  (testing "Event"
    (is (= {:errors [{:pluto.reader.errors/type  ::errors/missing-property-name
                      :pluto.reader.errors/value :event}]}
           (hooks/resolve-property {:type :event :name :event}
                                   {}
                                   {}
                                   {'events/id ""})))
    (is (= {:data ""}
           (hooks/resolve-property {:type :event :name :event}
                                   {:event '@events/id}
                                   {}
                                   {'events/id ""}))))
  (testing "Query"
    (is (= {:errors [{:pluto.reader.errors/type  ::errors/missing-property-name
                      :pluto.reader.errors/value :query}]}
           (hooks/resolve-property {:type :query :name :query}
                                   {}
                                   {}
                                   {'queries/id ""})))
    (is (= {:data ""}
           (hooks/resolve-property {:type :query :name :query}
                                   {:query '@queries/id}
                                   {}
                                   {'queries/id ""}))))
  (testing "Set"
    (is (= {:data :one} (hooks/resolve-property {:name :keyword :type #{:one :two :three}} {:keyword :one} {} {})))
    (is (= {:errors [{::errors/type  ::errors/invalid-property-value
                      ::errors/value :for}]}
           (hooks/resolve-property {:name :keyword :type #{:one :two :three}} {:keyword :for} {} {}))))
  (testing "Map"
    (is (= {:data :one} (hooks/resolve-property {:name :keyword :type #{:one :two :three}} {:keyword :one} {} {})))
    (is (= {:errors [{::errors/type  ::errors/invalid-property-value
                      ::errors/value :for}]}
           (hooks/resolve-property {:name :keyword :type #{:one :two :three}} {:keyword :for} {} {})))))

(deftest parse
  (is (= [:text {} ""]
         ((get-in (hooks/parse {:capacities {:hooks {'hooks/main {:properties {:view :view}}} :components {'text :text}}}
                    {'views/main   ['text {} ""]
                     'hooks/main.1 {:view '@views/main}})
                  [:data 'hooks/main.1 :view]) {})))
  (is (= {:data {'hooks/main.1 {:name "name" :id :keyword}}}
         (hooks/parse {:capacities {:hooks {'hooks/main {:properties {:name :string :id :keyword}}}}}
                      {'hooks/main.1 {:name "name" :id :keyword}})))
  (testing "Optional property"
    (is (= {:data {'hooks/main.1 {:name "name"}}
            :errors [{::errors/type  ::errors/invalid-property-name
                      ::errors/value :id}]}
           (hooks/parse {:capacities {:hooks {'hooks/main {:properties {:name :string :id :keyword}}}}}
                        {'hooks/main.1 {:name "name"}})))
    (is (= {:data {'hooks/main.1 {:name "name"}}}
           (hooks/parse {:capacities {:hooks {'hooks/main {:properties {:name :string :id? :keyword}}}}}
                        {'hooks/main.1 {:name "name"}})))
    (is (= {:data {'hooks/main.1 {:name "name" :id :keyword}}}
           (hooks/parse {:capacities {:hooks {'hooks/main {:properties {:name :string :id? :keyword}}}}}
                        {'hooks/main.1 {:name "name" :id :keyword}}))))
  (testing "Complex property"
    (is (= {:data {'hooks/main.1 {:name "name" :child {:name "name" :id :keyword}}}}
           (hooks/parse {:capacities {:hooks {'hooks/main {:properties {:name :string :child {:name :string :id :keyword}}}}}}
                        {'hooks/main.1 {:name "name" :child {:name "name" :id :keyword}}})))
    (is (= {:data {'hooks/main.1 {:name "name" :child {:name "name" :type :one}}}}
           (hooks/parse {:capacities {:hooks {'hooks/main {:properties {:name :string :child {:name :string :type #{:one :two :three}}}}}}}
                        {'hooks/main.1 {:name "name" :child {:name "name" :type :one}}})))

    (is (= {:data {'hooks/main.1 {:name "name" :children [{:name "name" :scopes [{:scope :one}]} {:name "name" :scopes [{:scope :two}]}]}}}
           (hooks/parse {:capacities {:hooks {'hooks/main {:properties {:name :string :children [{:name :string :scopes [{:scope #{:one :two :three}}]}]}}}}}
                        {'hooks/main.1 {:name "name" :children [{:name "name" :scopes [{:scope :one}]} {:name "name" :scopes [{:scope :two}]}]}})))))
