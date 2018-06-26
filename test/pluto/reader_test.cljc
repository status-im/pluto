(ns pluto.reader-test
  (:refer-clojure :exclude [read])
  (:require [clojure.test :refer [is deftest]]
            [pluto.reader :as reader]
            [pluto.reader.blocks :as blocks]))

(deftest read
  (is (= {:data nil} (reader/read "")))
  (is (= {:data nil :errors [{:type :reader-exception :ex-kind :eof :message "Unexpected EOF while reading item 0 of vector."}]} (reader/read "[")))
  (is (= {:data nil :errors [{:type :reader-exception :ex-kind :reader-error :message "No reader function for tag unknown."}]}
         (reader/read "#unknown []")))
  (is (= {:data {:extension/main '@view/main
                 :views/main     ['view {}
                                  ['text "Hello"]
                                  (list 'let ['cond? '@query/random-boolean]
                                    (list 'when 'cond?
                                      ['text {}
                                       "World"]))]}}
         (reader/read
           "{:extension/main @view/main

             :views/main
              [view {}
                [text \"Hello\"]
                  (let [cond? @query/random-boolean]
                    (when cond?
                      [text {}
                        \"World\"]))]}"))))

(deftest validate-keys
  (is (= {:type :invalid-extension-keys, :value #{:key}} (reader/validate-keys {} #{:views/id :key})))
  (is (= {:type :invalid-namespaces :value #{"typo"}} (reader/validate-keys {} #{:typo/id})))
  (is (= {:type :invalid-hooks :value #{:hooks/unknown}}
         (reader/validate-keys {:valid-hooks {:hooks/main {}}} #{:hooks/main :hooks/unknown}))))

(deftest parse-hiccup-children
  (is (=  {:data (list [:text {} ""])} (reader/parse-hiccup-children {:components {'text :text}} (list ['text {} ""])))))

(deftest parse
  (is (= {} (reader/parse {} {})))
  (is (= {:data   {:views/main ['text {} "Hello"]}
          :errors (list {:type :unknown-component :value 'text :key :views/main})}
         (reader/parse {} {:views/main ['text {} "Hello"]})))
  (is (= {:data {:views/main [:text {} "Hello"]}}
         (reader/parse {:components {'text :text}} {:views/main ['text {} "Hello"]})))
  (is (= {:data {:views/main [:text {} "Hello"]}}
         (reader/parse {:components {'text :text}} {:views/main ['text {} "Hello"]}))))

(deftest parse-blocks
  (is (=  {:data {:views/main [blocks/let-block {:env {'s "Hello"}} [:text {} 's]]}}
          (reader/parse {:components {'text :text}} {:views/main (list 'let ['s "Hello"] ['text {} 's])})))
  (is (=  {:data {:views/main [blocks/when-block {:test 'cond} [:text {} ""]]}}
        (reader/parse {:components {'text :text}} {:views/main (list 'when 'cond ['text {} ""])})))
  (is (=  {:data {:views/main nil}
           :errors '({:type :unsupported-type :value "string" :key :views/main})}
          (reader/parse {:components {'text :text}} {:views/main (list 'when "string" ['text {} ""])}))))
