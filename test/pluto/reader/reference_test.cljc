(ns pluto.reader.reference-test
  (:refer-clojure :exclude [resolve])
  (:require [clojure.test :refer [is deftest]]
            [pluto.reader.errors    :as errors]
            [pluto.reader.reference :as reference]))

(deftest reference?
  (is (false? (reference/reference? "")))
  (is (false? (reference/reference? 'test)))
  (is (true? (reference/reference? ['views/id])))
  (is (true? (reference/reference? ['views/id {}])))
  (is (false? (reference/reference? ['views/id {} {}])))
  (is (false? (reference/reference? ["views/id" {}]))))

(deftest reference->symbol
  (is (= nil (reference/reference->symbol "")))
  (is (= 'test (reference/reference->symbol ['test])))
  (is (= 'views/id (reference/reference->symbol ['views/id {}]))))

(deftest resolve
  (is (= {:errors [{::errors/type  ::errors/unknown-reference
                    ::errors/value {:value 'views/id}}]}
         (reference/resolve {} ['views/id])))
  (is (= {:errors [{::errors/type  ::errors/invalid-reference
                    ::errors/value {:value ""}}]}
         (reference/resolve {'views/id "view"} "")))
  (is (= {:data "view"}
         (reference/resolve {'views/id "view"} ['views/id]))))
