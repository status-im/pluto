(ns pluto.utils-test
    (:refer-clojure :exclude [slurp])
    (:require [clojure.test :refer [is deftest testing]]
              [pluto.error :as error]
              [pluto.utils :as utils]))

#?(:clj
   (defmacro slurp [file]
     (clojure.core/slurp file)))

(deftest interpolate
  (is (= {:errors [(error/syntax ::error/invalid {:type :placeholders} {:data #{'id}})]}
         (utils/interpolate nil "test-${id}")))
  (is (= {:errors [(error/syntax ::error/invalid {:type :placeholders} {:data #{'id1}})]}
         (utils/interpolate {'id 3} "${id1}")))
  (is (= {:data "test-"}   (utils/interpolate {'id nil} "test-${id}")))
  (is (= {:data "test-3"}  (utils/interpolate {'id 3} "test-${id}")))
  (is (= {:data "test- 3"} (utils/interpolate {'id "3"} "test-${id:2s}")))
  (is (= {:data "2.369"}   (utils/interpolate {'f 2.369} "${f}")))
  (is (= {:data "12345"}   (utils/interpolate {'d 12345} "${d:2d}")))
  (is (= {:data " 12345"}  (utils/interpolate {'d 12345} "${d:6d}")))
  (is (= {:data "2.37"}    (utils/interpolate {'f 2.369} "${f:1.2f}")))
  (is (= {:errors [(error/syntax ::error/invalid {:type :placeholders} {:data #{'f}})]}
         (utils/interpolate {'e 2.369} "${f:1.2f}"))))
