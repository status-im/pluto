(ns pluto.registry-test
  (:refer-clojure :exclude [read])
  (:require [clojure.test       :refer [is deftest testing]]
            [pluto.reader.hooks :as hooks]
            [pluto.registry     :as registry]
            [pluto.utils        :as utils]))

(def parsed-data {'meta {:name "test"}
                  :hooks {:main {:a {:parsed   {:name    "tester"}
                                     :hook-ref {:properties {:name :string}
                                                :hook
                                                (reify hooks/Hook
                                                 (hook-in [_ id properties {:keys [db]}]
                                                   {:db (assoc-in db [:main id] properties)})
                                                 (unhook [_ id _ {:keys [db]}] 
                                                   {:db (update db :main dissoc id)}))}}}}})

(deftest add-test
  (testing "Correctly adds extension"
    (is (= {:db {:registry {"test" {:state :inactive
                                    :data  parsed-data}}}}
           (registry/add parsed-data {:db {}}))))
  (testing "Correctly adds new extension without touching existing one"
    (is (= {:db {:registry {"test" {:state :inactive
                                    :data  parsed-data}
                            "old"  {:state :active}}}}
           (registry/add parsed-data {:db {:registry {"old" {:state :active}}}})))))

(deftest activate-test
  (testing "When extension is not present, do nothing"
    (is (= nil (registry/activate "test" {:db {}}))))
  (testing "When extension is present and activated, state is correctly switched + all app hooks are hooked-in"
    (is (= {:db {:registry {"test" {:state :active
                                    :data parsed-data}}
                 :main {:a {:name "tester"}}}}
           (utils/merge-fx {:db {}}
                           (partial registry/add parsed-data)
                           (partial registry/activate "test")))))
  (testing "When extension is already activated, do nothing" 
    (is (= nil (registry/activate "test" {:db {:registry {"test" {:state :active}}}})))))

(deftest deactivate-test
  (testing "When extension is not present, do nothing"
    (is (= nil (registry/deactivate "test" {:db {}}))))
  (testing "When extension is present and deactivated, state is correctly switched + all app hooks are unhooked"
    (is (= {:db {:registry {"test" {:state :inactive
                                    :data parsed-data}}
                 :main {}}}
           (utils/merge-fx {:db {}}
                           (partial registry/add parsed-data)
                           (partial registry/activate "test")
                           (partial registry/deactivate "test")))))
  (testing "When extension is already deactivated, do nothing" 
    (is (= nil (registry/deactivate "test" {:db {:registry {"test" {:state :inactive}}}})))))

(deftest remove-test
  (testing "When extension is not present, do nothing"
    (is (= nil (registry/remove "test" {:db {}}))))
  (testing "When extension is present and inactive, remove it"
    (is (= {:db {:registry {}}}
           (registry/remove "test"
                            {:db {:registry {"test" {:state :inactive}}}}))))
  (testing "When extension is present and active, remove it + produce unhook effects"
    (is (= {:db {:registry {}
                 :main {}}}
           (utils/merge-fx {:db {}}
                           (partial registry/add parsed-data)
                           (partial registry/activate "test") 
                           (partial registry/remove "test"))))))
