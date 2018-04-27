(ns pluto.reader-test
  (:require [cljs.test :refer-macros [is deftest async use-fixtures]]
            [pluto.reader :as reader]))


(deftest read
  (is (= {:data nil} (reader/read "")))
  (is (= {:data nil :errors [{:type :reader-exception :ex-kind :eof :message "Unexpected EOF while reading item 0 of vector."}]} (reader/read "[")))
  (is (= {:data [] :errors [{:type :unknown-tag :tag 'unknown, :value []}]}
         (reader/read "#unknown []"))))

(def opts {:valid-hooks #{:hooks/main}})

(deftest validate-keys
  (is (= {:no-namespace #{:key}} (reader/validate-keys #{:views/id :key} opts)))
  (is (= {:invalid-namespaces #{"typo"}} (reader/validate-keys #{:typo/id} opts)))
  (is (= {:invalid-extensions #{:extension/unknown}} (reader/validate-keys #{:extension/meta :extension/unknown} opts)))
  (is (= {:invalid-hooks #{:hooks/unknown}} (reader/validate-keys #{:hooks/main :hooks/unknown} opts))))
