(ns pluto.reader.block-test
  (:require [clojure.test :refer [is deftest]]
            [pluto.reader.blocks :as blocks]))

(deftest parse
  (is (= {:data [blocks/let-block {:env {'s "Hello"}} 's]}
         (blocks/parse {} '(let [s "Hello"] s))))
  (is (= {:data [blocks/let-block {:env {'s "Hello"}} ['test {} 's]]}
         (blocks/parse {} (list 'let ['s "Hello"] ['test {} 's])))))
