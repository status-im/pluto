(ns pluto.reader.blocks-test
  (:require [cljs.test :refer-macros [is deftest async use-fixtures]]
            [pluto.reader.blocks :as blocks]))

(deftest parse
  (is (= nil (blocks/parse {} '(let [s "Hello"] s))))
  (is (= nil (blocks/parse {} '(let [s "Hello"] ['test {} s])))))
