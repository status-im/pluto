(ns pluto.reader.destructuring-test
  (:refer-clojure :exclude [destructure])  
  (:require [clojure.test :refer [is deftest]]
            [pluto.reader.destructuring :as destructuring]
            [pluto.error                :as error]))

(deftest destructure-seq
  #_
  (is (= {:errors [{::error/type ::error/invalid-destructuring-format ::error/value {:data [1] :type :sequential}}]}
         (destructuring/destructure-seq '[1] [1])))
  #_
  (is (= {:errors [{::error/type ::error/invalid-destructuring-format ::error/value {:data '[a b] :type :sequential}}]}
         (destructuring/destructure-seq '[a b] [1])))
  (is (= {:data '{a 1}} (destructuring/destructure-seq '[a] [1])))
  (is (= {:data '{a 1 c 3}} (destructuring/destructure-seq '[a _ c] [1 2 3])))
  (is (= {} (destructuring/destructure-seq '[_ _ _] [1 2 3])))
  (is (= {:data '{all [1 2 3]}} (destructuring/destructure-seq '[_ _ _ :as all] [1 2 3]))))

(deftest destructure-assoc
  (is (= {:data '{a nil b nil}}
         (destructuring/destructure-assoc '{a :a b :b} nil)))
  (is (= {:data '{a 1 b 2}}
         (destructuring/destructure-assoc '{a :a b :b} {:a 1 :b 2})))
  #_
  (is (= {:errors [{::error/type ::error/invalid-destructuring-format
                    ::error/value {:data {1 :a} :type :assoc}}]}
         (destructuring/destructure-assoc '{1 :a} {:a 1})))
  #_
  (is (= {:errors [{::error/type ::error/invalid-destructuring-format
                    ::error/value {:data [] :type :assoc}}]}
         (destructuring/destructure-assoc [] {:a 1})))
  #_
  (is (= {:errors [{::error/type ::error/invalid-destructuring-format
                    ::error/value {:data '[a1 a2] :type :sequential}}]}
         (destructuring/destructure-assoc '{[a1 a2] :a} {:a [1]})))
  (is (= {:data '{a 1 b 2 c 4 all {:a 1 :b 2 :d 3}}}
         (destructuring/destructure-assoc '{a :a b :b c [:c 4] :as all} {:a 1 :b 2 :d 3}))))

(deftest destructure
  (is (= {:data '{a nil}} (destructuring/destructure '{a :a} nil)))
  (is (= {:data '{a 1}} (destructuring/destructure '[a] [1])))
  (is (= {:data '{a 1 b 2}} (destructuring/destructure '[a {b :b}] [1 {:b 2}])))
  (is (= {:data '{a 1 b 2 c 3}} (destructuring/destructure '[a [b [c]]] [1 [2 [3]]])))
  (is (= {:data '{a 1 b 2}} (destructuring/destructure '{a :a b :b} {:a 1 :b 2})))
  (is (= {:data '{a 1 b2 3}} (destructuring/destructure '{a :a [_ b2] :b} {:a 1 :b [2 3]})))
  (is (= {:data '{a 1 c 3}} (destructuring/destructure '{a :a {c :c} :b} {:a 1 :b {:c 3}})))
  (is (= {:data '{a1 1 a3 3 d 4 e2 6 f 7 g2 10
                  all {:a [1 2 3] :b {:d 4 :e [5 6] :g [9 10]}}}}
         (destructuring/destructure '{[a1 _ a3] :a {d :d f [:f 7] [_ e2] :e [_ g2] :g} :b :as all}
                                     {:a [1 2 3] :b {:d 4 :e [5 6] :g [9 10]}}))))
