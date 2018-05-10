(ns pluto.reader-test
  (:require [cljs.test :refer-macros [is deftest async use-fixtures]]
            [pluto.reader :as reader :refer [Reference]]
            [pluto.reader.blocks :as blocks]))

(deftest read
  (is (= {:data nil} (reader/read "")))
  (is (= {:data nil :errors [{:type :reader-exception :ex-kind :eof :message "Unexpected EOF while reading item 0 of vector."}]} (reader/read "[")))
  (is (= {:data [] :errors [{:type :unknown-tag :tag 'unknown, :value []}]}
         (reader/read "#unknown []")))
  (is (= {:data (Reference. :query [])}
         (reader/read "#query []")))
  (is (= {:data {:extension/main (Reference. :view [:main])
                 :views/main     ['view {}
                                  ['text "Hello"]
                                  (list 'let ['cond? (Reference. :query [:random-boolean])]
                                    (list 'when 'cond?
                                      ['text {}
                                       "World"]))]}}
         (reader/read
           "{:extension/main
              #view [:main]

             :views/main
              [view {}
                [text \"Hello\"]
                  (let [cond? #query [:random-boolean]]
                    (when cond?
                      [text {}
                        \"World\"]))]}"))))

(deftest validate-keys
  (is (= {:no-namespace #{:key}} (reader/validate-keys {} #{:views/id :key})))
  (is (= {:invalid-namespaces #{"typo"}} (reader/validate-keys {} #{:typo/id})))
  (is (= {:invalid-extensions #{:extension/unknown}}
         (reader/validate-keys {:valid-extensions #{:extension/meta :extension/lifecycle}}
                               #{:extension/meta :extension/unknown})))
  (is (= {:invalid-hooks #{:hooks/unknown}}
         (reader/validate-keys {:valid-hooks #{:hooks/main}} #{:hooks/main :hooks/unknown}))))

#_
(deftest parse-hiccup-children
  (is (=  {:data (list [:text {} ""])} (reader/parse-hiccup-children {:components {'text :text}} (list ['text {} ""])))))

#_
(deftest parse
  (is (= {} (reader/parse {} {})))
  (is (= {:data   {:views/main ['text {} "Hello"]}
          :errors (list {:type :unknown-component :element 'text :key :views/main})}
         (reader/parse {} {:views/main ['text {} "Hello"]})))
  (is (= {:data {:views/main [:text {} "Hello"]}}
         (reader/parse {:components {'text :text}} {:views/main ['text {} "Hello"]})))
  (is (= {:data {:views/main [:text {} "Hello"]}}
         (reader/parse {:components {'text :text}} {:views/main ['text {} "Hello"]}))))

#_
(deftest parse-references
  (is (=  {:data {:views/main [:pluto.reader-test/main]}} (reader/parse {} {:views/main (Reference. :view [::main])}))))

(deftest parse-let-blocks
  (is (=  {:data {:views/main [blocks/let-block {:env {'s "Hello"}} [:text {} 's]]}}
          (reader/parse {:components {'text :text}} {:views/main (list 'let ['s "Hello"] ['text {} 's])})))
  #_
  (is (= nil (reader/parse {:components {'text :text}} {:views/main (list 'let ['cond? (Reference. :query [::query])] ['text])})))
  #_
  (is (= nil (reader/parse {:components {'text :text}} {:views/main (list 'let ['cond? (Reference. :query [::query])]
                                                                          (list 'when 'cond?
                                                                                ['text {} "World"]))}))))
