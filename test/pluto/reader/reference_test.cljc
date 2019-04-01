(ns pluto.reader.reference-test
  (:refer-clojure :exclude [resolve])
  (:require [clojure.test :refer [is deftest]]
            [pluto.error            :as error]
            [pluto.reader.reference :as reference]))

(deftest valid-reference?
  (is (nil? (reference/reference? nil)))
  (is (nil? (reference/reference? "")))
  (is (nil? (reference/reference? 'test)))
  (is (nil? (reference/reference? :keyword)))
  (is (true?  (reference/reference? ['test])))
  (is (true?  (reference/reference? ['views/id {}])))
  (is (false? (reference/reference? ['views/id {} {}])))
  (is (false? (reference/reference? ['views/id 1 {}])))
  (is (false? (reference/reference? ["views/id" {}])))
  (is (true?  (reference/reference? ['views/id {}])))
  (is (true?  (reference/reference? ['views/id 'arg]))))

(deftest reference->symbol
  (is (= nil (reference/reference->symbol "")))
  (is (= 'test (reference/reference->symbol ['test])))
  (is (= 'views/id (reference/reference->symbol ['views/id {}]))))

(deftest resolve
  #_
  (is (= {:errors [{::error/type  ::error/unknown-reference
                    ::error/value {:value 'id :type :view}}]}
         (reference/resolve {} {} :view ['id])))
  #_
  (is (= {:errors [{::error/type  ::error/invalid-reference
                    ::error/value {:value "" :type :view}}]}
         (reference/resolve {} {'views/id "view"} :view "")))
  #_
  (is (= {:errors [{::error/type  ::error/unknown-reference-type
                    ::error/value {:value :unknown}}]}
         (reference/resolve {} {'views/id "view"} :unknown ['id])))
  (is (= {:data "view"}
         (reference/resolve {} {'views/id "view"} :view ['id])))
  (is (= {:data :div}
         (reference/resolve {:capacities {:components {'component {:data :div}}}} {} :view ['component]))))
