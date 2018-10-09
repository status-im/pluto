(ns pluto.reader.block-test
  (:require [clojure.test :refer [is deftest testing]]
            [pluto.reader.errors :as errors]
            [pluto.reader.blocks :as blocks]))

(deftest bindings->env
  (is (= {:data '{a 1}} (blocks/bindings->env '[a 1])))
  (is (= {:errors [{:pluto.reader.errors/type :pluto.reader.errors/invalid-destructuring-format
                    :pluto.reader.errors/value '[a 1 2]}]}
         (blocks/bindings->env '[a 1 2])))
  (is (= {:errors [{:pluto.reader.errors/type :pluto.reader.errors/invalid-destructuring-format
                    :pluto.reader.errors/value '[1 2]}]}
         (blocks/bindings->env '[1 2])))
  (is (= {:data '{x 1}} (blocks/bindings->env '[{x :x} {:x 1}]))))

(deftest let-block
  (testing "parse"
    (is (= {:data [blocks/let-block {:env {'s "Hello"}} 's]}
           (blocks/parse {} {} '(let [s "Hello"] s))))
    (is (= {:data [blocks/let-block {:env '{{a :a} [:aa]}} 'a]}
           (blocks/parse {:capacities {:queries #{:aa}}} {} '(let [{a :a} [:aa]] a))))

    (is (= {:data [blocks/let-block {:env '{a {:b 1} b 1}} 'b]}
           (blocks/parse {} {} '(let [{a :a} {:a {:b 1}} {b :b} a] b))))
    (is (= {:data [blocks/let-block {:env '{x 1 {a :a} [:aa {:x x}]}} 'a]}
           (blocks/parse {:capacities {:queries #{:aa}}} {} '(let [x 1 {a :a} [:aa {:x x}]] a))))

    (is (= {:data [blocks/let-block {:env {'s "Hello"}} ['test {} 's]]}
           (blocks/parse {} {} (list 'let ['s "Hello"] ['test {} 's]))))
    (is (= {:data [blocks/let-block {:env nil}
                   ['test {} 's]]
            :errors [{::errors/type ::errors/invalid-destructuring-format ::errors/value ['s "Hello" 1]}]}
           (blocks/parse {} {} (list 'let ['s "Hello" 1] ['test {} 's]))))
    (is (= {:data [blocks/let-block {:env {'a 1}} ['test {} 'a]]}
           (blocks/parse {} {} (list 'let ['{a :a} {:a 1}] ['test {} 'a]))))))

(deftest let-block-resolution
  (is (= ['test {} 1] (blocks/let-block {:env {'a 1}} ['test {} 'a])))
  #_
  (is (= ['test {} 1] (blocks/let-block {:env '{{a :a} [:aa]}} '[test {} a]))))
