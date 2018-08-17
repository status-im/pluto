(ns pluto.reader.permissions-test
  (:require [clojure.test :refer [is deftest testing]]
            [pluto.reader.permissions :as permissions]))

(deftest allowed-path?-test
  (testing "Correctly matches simple include-paths"
    (is (permissions/allowed-path? [:a :b :c] {:include-paths #{[:a :b :c]}}))
    (is (permissions/allowed-path? [:a :b :c :d] {:include-paths #{[:a :b :c]
                                                                   [:a :e]}}))
    (is (not (permissions/allowed-path? [:a :b] {:include-paths #{[:a :b :c]}}))))
  (testing "Correctly matches include paths with regular expressions"
    (is (permissions/allowed-path? [:chats "public-status" :messages "message-id"]
                                   {:include-paths #{[:chats #"public-.*" :messages #".*"]}}))
    (is (not (permissions/allowed-path? [:chats "private-status" :messages "message-id"]
                                        {:include-paths #{[:chats "public-.*" :messages #".*"]}}))))
  (testing "Exclude paths are taken into account as well"
    (is (permissions/allowed-path? [:a :b :c] {:include-paths #{[:a :b]}
                                               :exclude-paths #{[:a :b :c :d]}}))
    (is (not (permissions/allowed-path? [:a :b :c :d] {:include-paths #{[:a :b]}
                                                       :exclude-paths #{[:a :b :c :d]}})))))
