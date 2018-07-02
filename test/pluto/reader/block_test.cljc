(ns pluto.reader.block-test
  (:require [clojure.test :refer [is deftest]]
            [pluto.reader.errors :as errors]
            [pluto.reader.blocks :as blocks]))

(deftest let-block
  (is (= {:data [blocks/let-block {:env {'s "Hello"}} 's]}
         (blocks/parse {} '(let [s "Hello"] s))))
  (is (= {:data [blocks/let-block {:env {'s "Hello"}} ['test {} 's]]}
         (blocks/parse {} (list 'let ['s "Hello"] ['test {} 's]))))
  (is (= {:errors [{::errors/type ::errors/invalid-block ::errors/value ['s "Hello" 1]}]}
         (blocks/parse {} (list 'let ['s "Hello" 1] ['test {} 's])))))

