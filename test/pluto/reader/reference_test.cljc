(ns pluto.reader.reference-test
  (:refer-clojure :exclude [resolve])
  (:require [clojure.test :refer [is deftest testing]]
            [pluto.reader.errors    :as errors]
            [pluto.reader.reference :as reference]))

(deftest reference?
  (is (false? (reference/reference? "")))
  (is (true? (reference/reference? 'test)))
  (is (true? (reference/reference? 'views/id))))

(deftest reference->symbol
  (is (= nil (reference/reference->symbol "")))
  (is (= 'test (reference/reference->symbol 'test)))
  (is (= 'views/id (reference/reference->symbol 'views/id))))

(deftest reference->type
  (is (= nil (reference/reference->type "")))
  (is (= nil (reference/reference->type 'test)))
  (is (= :view (reference/reference->type 'views/id))))

(deftest resolve
  (is (= {:errors [{::errors/type  ::errors/missing-property-value
                    ::errors/value :view}]}
         (reference/resolve {} {:name :view :type :view} {:view 'views/id})))
  (is (= {:errors [{::errors/type  ::errors/invalid-property-type
                    ::errors/value :view}]}
         (reference/resolve {'events/id "events"} {:name :view :type :view} {:view 'events/id})))
  (is (= {:errors [{::errors/type  ::errors/missing-property-name
                    ::errors/value nil}]}
         (reference/resolve {'events/id "events"} {} {:event 'events/id})))
  (is (= {:errors [{::errors/type  ::errors/missing-property-name
                    ::errors/value :view}]}
         (reference/resolve {'views/id "view"} {:name :view :type :view} {})))
  (is (= {:data "view"}
         (reference/resolve {'views/id "view"} {:name :view :type :view} {:view 'views/id}))))
