(ns pluto.reader.blocks-test
  (:require [cljs.test :refer-macros [is deftest async use-fixtures]]
            [pluto.reader.blocks :as blocks]))

(deftest parse
  (is (= {:data [blocks/let-block {:env {'s "Hello"}} 's]}
         (blocks/parse {} '(let [s "Hello"] s))))
  (is (= {:data [blocks/let-block {:env {'s "Hello"}} ['test {} 's]]}
         (blocks/parse {} (list 'let ['s "Hello"] ['test {} 's])))))
