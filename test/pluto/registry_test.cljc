(ns pluto.registry-test
  (:refer-clojure :exclude [read])
  (:require [clojure.test :refer [is deftest testing]]
            [pluto.registry :as registry]))

(def id "id")
(def extension {'hooks/main {}})

(deftest add!
  (let [registry (registry/new-registry)]
    (is (= nil (registry/add! registry id extension)))
    (is (= {id (registry/initial-state extension)} (registry/all registry))))
  (testing "Id must be unique"
    (let [registry      (registry/new-registry)
          new-extension (assoc-in extension ['meta :name] "New name")]
      (is (= nil
             (registry/add! registry id extension)))
      (is (= {id (registry/initial-state extension)}
             (registry/all registry)))
      (is (= extension
             (registry/add! registry id new-extension)))
      (is (= {id (registry/initial-state extension)}
             (registry/all registry)))))
  (testing "Hooks must have unique names"
    (let [registry (registry/new-registry)]
      (is (= nil
             (registry/add! registry id extension)))
      (is (= {id (registry/initial-state extension)}
             (registry/all registry)))
      (is (= nil
             (registry/add! registry "id2" extension)))
      (is (= {id (registry/initial-state extension)}
             (registry/all registry))))))

(deftest remove!
  (let [registry (registry/new-registry)]
    (is (= nil (registry/remove! registry id)))
    (is (= {} (registry/all registry))))
  (let [registry (registry/new-registry)]
    (is (= nil
           (registry/add! registry id extension)))
    (is (= {id (registry/initial-state extension)}
           (registry/all registry)))
    (is (= extension
           (registry/remove! registry id)))
    (is (= nil
           (registry/add! registry id extension)))
    (is (= {id (registry/initial-state extension)}
           (registry/all registry)))))

(deftest state
  (let [registry (registry/new-registry)
        _        (registry/add! registry id extension)]
    (is (= ::registry/inactive (get-in (registry/all registry) [id ::registry/state])))
    (is (true? (registry/activate! registry id)))
    (is (false? (registry/activate! registry id)))
    (is (nil? (registry/activate! registry "unknown-id")))
    (is (= ::registry/active (get-in (registry/all registry) [id ::registry/state])))
    (is (true? (registry/deactivate! registry id)))
    (is (= ::registry/inactive (get-in (registry/all registry) [id ::registry/state])))))

(deftest hooks
  (let [registry (registry/new-registry)
        _        (registry/add! registry "id1" {'hooks/main.1 {1 1}})
        _        (registry/add! registry "id2" {'hooks/main.2 {2 2}})
        _        (registry/add! registry "id3" {'views/main {} 'hooks/other {}})]
    (is (= {}
           (registry/hooks registry 'hooks/main)))
    (registry/activate! registry "id1")
    (registry/activate! registry "id2")
    (registry/activate! registry "id3")
    (is (= {'hooks/main.1 {1 1} 'hooks/main.2 {2 2}}
           (registry/hooks registry 'hooks/main)))
    (registry/deactivate! registry "id1")
    (is (= {'hooks/main.2 {2 2}}
           (registry/hooks registry 'hooks/main)))
    (is (= {'hooks/main.2 {2 2}}
           (registry/hooks registry 'hooks/main.2)))
    (is (= {}
           (registry/hooks registry 'hooks/main.3)))))
