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

(deftest valid-reference?
  (is (false? (reference/valid-reference? nil)))
  (is (false? (reference/valid-reference? "")))
  (is (false? (reference/valid-reference? :keyword)))
  (is (true?  (reference/valid-reference? ['test])))
  (is (true?  (reference/valid-reference? ['views/id {}])))
  (is (false? (reference/valid-reference? ['views/id {} {}])))
  (is (false? (reference/valid-reference? ['views/id 1 {}])))
  (is (false? (reference/valid-reference? ["id" {}])))
  (is (true?  (reference/valid-reference? ['views/id {}])))
  (is (true?  (reference/valid-reference? ['views/id 'arg]))))

(deftest resolve
  (is (= {:errors [{::errors/type  ::errors/unknown-reference
                    ::errors/value {:value 'id :type :view}}]}
         (reference/resolve {} {} :view ['id])))
  (is (= {:errors [{::errors/type  ::errors/invalid-reference
                    ::errors/value {:value "" :type :view}}]}
         (reference/resolve {} {'views/id "view"} :view "")))
  (is (= {:errors [{::errors/type  ::errors/unknown-reference-type
                    ::errors/value {:value :unknown}}]}
         (reference/resolve {} {'views/id "view"} :unknown ['id])))
  (is (= {:data "view"}
         (reference/resolve {} {'views/id "view"} :view ['id])))
  (is (= {:data :div}
         (reference/resolve {:capacities {:components {'component {:value :div}}}} {} :view ['component]))))
