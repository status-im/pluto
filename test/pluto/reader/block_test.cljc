(ns pluto.reader.block-test
  (:refer-clojure :exclude [destructure])  
  (:require [clojure.test :refer [is deftest]]
            [pluto.reader.errors :as errors]
            [pluto.reader.blocks :as blocks]))

(deftest destructure-seq
  (is (= {:errors [{::errors/type ::errors/invalid-destructuring-format ::errors/value [1]}]}
         (blocks/destructure-seq '[1] [1])))  
  (is (= {:errors [{::errors/type ::errors/invalid-destructuring-format ::errors/value '[a b]}]}
         (blocks/destructure-seq '[a b] [1])))  
  (is (= {:data '{a 1}} (blocks/destructure-seq '[a] [1])))
  (is (= {:data '{a 1 c 3}} (blocks/destructure-seq '[a _ c] [1 2 3])))
  (is (= {} (blocks/destructure-seq '[_ _ _] [1 2 3])))
  (is (= {:data '{all [1 2 3]}} (blocks/destructure-seq '[_ _ _ :as all] [1 2 3]))))

(deftest destructure-assoc
  (is (= {:data '{a 1 b 2}}
         (blocks/destructure-assoc '{a :a b :b} {:a 1 :b 2})))
  (is (= {:errors [{:pluto.reader.errors/type :pluto.reader.errors/invalid-destructuring-format,
                    :pluto.reader.errors/value {1 :a}}]}
         (blocks/destructure-assoc '{1 :a} {:a 1})))
  (is (= {:errors [{:pluto.reader.errors/type :pluto.reader.errors/invalid-destructuring-format,
                    :pluto.reader.errors/value []}]}
         (blocks/destructure-assoc [] {:a 1})))
  (is (= {:errors [{:pluto.reader.errors/type :pluto.reader.errors/invalid-destructuring-format,
                    :pluto.reader.errors/value '[a1 a2]}]}
         (blocks/destructure-assoc '{[a1 a2] :a} {:a [1]})))
  (is (= {:data '{a 1 b 2 c 4 all {:a 1 :b 2 :d 3}}}
         (blocks/destructure-assoc '{a :a b :b c [:c 4] :as all} {:a 1 :b 2 :d 3}))))

(deftest destructure
  (is (= {:data '{a 1}} (blocks/destructure '[a] [1])))
  (is (= {:data '{a 1 b 2}} (blocks/destructure '[a {b :b}] [1 {:b 2}])))
  (is (= {:data '{a 1 b 2 c 3}} (blocks/destructure '[a [b [c]]] [1 [2 [3]]])))
  (is (= {:data '{a 1 b 2}} (blocks/destructure '{a :a b :b} {:a 1 :b 2})))
  (is (= {:data '{a 1 b2 3}} (blocks/destructure '{a :a [_ b2] :b} {:a 1 :b [2 3]})))
  (is (= {:data '{a 1 c 3}} (blocks/destructure '{a :a {c :c} :b} {:a 1 :b {:c 3}})))
  (is (= {:data '{a1 1 a3 3 d 4 e2 6 f 7 g2 10
                  all {:a [1 2 3] :b {:d 4 :e [5 6] :g [9 10]}}}}
         (blocks/destructure '{[a1 _ a3] :a {d :d f [:f 7] [_ e2] :e [_ g2] :g} :b :as all}
                             {:a [1 2 3] :b {:d 4 :e [5 6] :g [9 10]}}))))

(deftest bindings->env
  (is (= {:data '{a 1}} (blocks/bindings->env '[a 1])))
  (is (= {:errors [{:pluto.reader.errors/type :pluto.reader.errors/invalid-destructuring-format
                    :pluto.reader.errors/value '[a 1 2]}]}
         (blocks/bindings->env '[a 1 2])))
  (is (= {:errors [{:pluto.reader.errors/type :pluto.reader.errors/invalid-destructuring-format
                    :pluto.reader.errors/value '[1 2]}]}
         (blocks/bindings->env '[1 2])))
  (is (= {:data '{a 1}} (blocks/bindings->env '[[a] [1]]))))

(deftest let-block
  (is (= {:data [blocks/let-block {:env {'s "Hello"}} 's]}
         (blocks/parse {} '(let [s "Hello"] s))))
  (is (= {:data [blocks/let-block {:env {'s "Hello"}} ['test {} 's]]}
         (blocks/parse {} (list 'let ['s "Hello"] ['test {} 's]))))
  (is (= {:data [blocks/let-block {:env nil}
                 ['test {} 's]]
          :errors [{::errors/type ::errors/invalid-destructuring-format ::errors/value ['s "Hello" 1]}]}
         (blocks/parse {} (list 'let ['s "Hello" 1] ['test {} 's]))))
  (is (= {:data [blocks/let-block {:env {'a 1}} ['test {} 's]]}
         (blocks/parse {} (list 'let ['{a :a} {:a 1}] ['test {} 's])))))
