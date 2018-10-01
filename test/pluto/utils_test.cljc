(ns pluto.utils-test
  (:refer-clojure :exclude [slurp])
  (:require [clojure.test :refer [is deftest testing]]
            [pluto.utils :as utils]))

(deftest merge-fx-test
  (testing "Correctly merges results of multiple effect producing functions"
    (is (= {:db           {:a 2
                           :b 1}
            :fire-missile true}
           (utils/merge-fx {:db  {:a 0}
                            :now "current-time"}
                           (fn [{:keys [db]}]
                             {:db (update db :a inc)})
                           (fn [{:keys [db]}]
                             {:db (-> db
                                      (update :a inc)
                                      (assoc :b 1))})
                           (constantly {:fire-missile true}))))))

#?(:clj
 (defmacro slurp [file]
   (clojure.core/slurp file)))
