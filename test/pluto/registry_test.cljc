(ns pluto.registry-test
  (:refer-clojure :exclude [read])
  (:require [clojure.test :refer [is deftest testing]]
            [pluto.host     :as host]
            [pluto.registry :as registry]))

(def parsed-data {'meta {:name "test"}
                  :hooks {:main {:a {:parsed   {:name    "tester"}
                                     :hook-ref (reify host/AppHook
                                                 (id [_] :main)
                                                 (properties [_] {:name :string})
                                                 (hook-in [_ id properties]
                                                   {:hook-effect {id properties}})
                                                 (unhook [_ id]
                                                   {:unhook-effect id}))}}}})

(deftest add-test
  (testing "Correctly adds extension"
    (is (= {"test" {:state :pluto.registry/inactive
                    :data  parsed-data}}
           (registry/add {} parsed-data)))))

(deftest activate-test
  (testing "When extension is not present, do nothing"
    (is (= {:extensions {}} (registry/activate {} "test"))))
  (testing "When extension is present and activated, state is correctly switched + all app hooks are hooked-in"
    (is (= {:extensions {"test" {:state :pluto.registry/active
                                 :data parsed-data}}
            :main {:a {:hook-effect {:a {:name "tester"}}}}}
           (registry/activate (registry/add {} parsed-data) "test"))))
  (testing "When extension is already activated, do nothing" 
    (is (= {:extensions {"test" {:state :pluto.registry/active}}}
           (registry/activate {"test" {:state :pluto.registry/active}} "test")))))

(deftest deactivate-test
  (testing "When extension is not present, do nothing"
    (is (= {:extensions {}} (registry/deactivate {} "test"))))
  (testing "When extension is present and deactivated, state is correctly switched + all app hooks are unhooked"
    (is (= {:extensions {"test" {:state :pluto.registry/inactive
                                 :data parsed-data}}
            :main {:a {:unhook-effect :a}}}
           (registry/deactivate {"test" {:state :pluto.registry/active
                                         :data  parsed-data}}
                                "test"))))
  (testing "When extension is already deactivated, do nothing" 
    (is (= {:extensions {"test" {:state :pluto.registry/inactive}}}
           (registry/deactivate {"test" {:state :pluto.registry/inactive}} "test")))))

(deftest remove-test
  (testing "When extension is not present, do nothing"
    (is (= {:extensions {}} (registry/remove {} "test"))))
  (testing "When extension is present and inactive, remove it"
    (is (= {:extensions {}}
           (registry/remove {"test" {:state :pluto.registry/inactive}}
                            "test"))))
  (testing "When extension is present and active, remove it + produce unhook effects"
    (is (= {:extensions {}
            :main {:a {:unhook-effect :a}}}
           (registry/remove {"test" {:state :pluto.registry/active
                                     :data  parsed-data}}
                            "test")))))
