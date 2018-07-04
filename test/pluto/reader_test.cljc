(ns pluto.reader-test
  (:refer-clojure :exclude [read])
  (:require [clojure.test :refer [is deftest]]
            [pluto.reader :as reader]
            [pluto.reader.errors :as errors]
            [pluto.reader.blocks :as blocks]))

(deftest read
  (is (= {:data nil} (reader/read "")))
  (is (= {:errors [{::errors/type ::errors/reader-error ::errors/value :eof ::errors/message "Unexpected EOF while reading item 0 of vector."}]} (reader/read "[")))
  (is (= {:errors [{::errors/type ::errors/reader-error ::errors/value :reader-error ::errors/message "No reader function for tag unknown."}]}
         (reader/read "#unknown []")))
  (is (= {:data {:extension/main '@view/main
                 :views/main     ['view {}
                                  ['text "Hello"]
                                  (list 'let ['cond? '@queries/random-boolean]
                                    (list 'when 'cond?
                                      ['text {}
                                       "World"]))]}}
         (reader/read
           "{:extension/main @view/main

             :views/main
              [view {}
                [text \"Hello\"]
                  (let [cond? @queries/random-boolean]
                    (when cond?
                      [text {}
                        \"World\"]))]}"))))

(deftest validate-keys
  (is (= [{::errors/type ::errors/invalid-keys ::errors/value #{'key}}] (reader/validate-keys {} #{'views/id 'key 'meta})))
  (is (= [{::errors/type ::errors/invalid-keys ::errors/value #{'typo/id}}] (reader/validate-keys {} #{'typo/id 'meta})))
  (is (= [{::errors/type ::errors/invalid-keys ::errors/value #{'typo/id 'key}}] (reader/validate-keys {} #{'typo/id 'key 'meta})))
  (is (= [{::errors/type ::errors/invalid-keys ::errors/value #{'hooks/unknown}}]
         (reader/validate-keys {:capacities {:hooks {'hooks/main {}}}} #{'hooks/main 'hooks/unknown 'meta})))
  (is (= [{::errors/type ::errors/invalid-keys ::errors/value #{'queries/unknown}}]
         (reader/validate-keys {:capacities {:queries {'queries/main {}}}} #{'queries/main 'queries/unknown 'meta})))
  (is (= [{::errors/type ::errors/invalid-keys ::errors/value #{'events/unknown}}]
         (reader/validate-keys {:capacities {:events {'events/main {}}}} #{'events/main 'events/unknown 'meta}))))

(deftest parse-hiccup-children
  (is (=  {:data (list [:text {} ""])} (reader/parse-hiccup-children {:components {'text :text}} (list ['text {} ""])))))

(def default-meta {:name "" :description "" :documentation ""})

(defn extension [m]
  (assoc m 'meta default-meta))

(deftest parse
  (is (= {:data   {'meta nil}
          :errors [{::errors/type ::errors/invalid-meta ::errors/value {} :key 'meta}]} (reader/parse {} {'meta {}})))
  (is (= {:data {'meta default-meta}} (reader/parse {} {'meta default-meta})))
  (is (= {:data   {'meta default-meta 'views/main ['text {} "Hello"]}
          :errors (list {::errors/type ::errors/unknown-component ::errors/value 'text :key 'views/main})}
         (reader/parse {} (extension {'views/main ['text {} "Hello"]}))))
  (is (= {:data {'meta default-meta 'views/main [:text {} "Hello"]}}
         (reader/parse {:components {'text :text}} (extension {'views/main ['text {} "Hello"]}))))
  (is (= {:data {'meta default-meta 'views/main [:text {} "Hello"]}}
         (reader/parse {:components {'text :text}} (extension {'views/main ['text {} "Hello"]})))))

(defn- first-error-type [m]
  (::errors/type (first (:errors m))))

(deftest parse-view
  (is (= ::errors/invalid-view (first-error-type (reader/parse-view {} {}))))
  (is (= {:data   ['text {} "Hello"]
          :errors (list {::errors/type ::errors/unknown-component ::errors/value 'text})}
         (reader/parse-view {} ['text {} "Hello"])))
  (is (= ::errors/invalid-view
         (first-error-type (reader/parse-view {:components {'text :text}} ['text "Hello"]))))
  (is (= ::errors/invalid-view
         (first-error-type (reader/parse-view {:components {'text :text}} ['text {} []]))))
  (is (= {:data [:text {} "Hello"]}
         (reader/parse-view {:components {'text :text}} ['text {} "Hello"])))
  (is (= {:data [:text {} "Hello"]}
         (reader/parse-view {:components {'text :text}} ['text {} "Hello"]))))

(deftest parse-blocks
  (is (=  {:data {'meta default-meta 'views/main [blocks/let-block {:env {'s "Hello"}} [:text {} 's]]}}
          (reader/parse {:components {'text :text}} (extension {'views/main (list 'let ['s "Hello"] ['text {} 's])}))))
  (is (=  {:data {'meta default-meta 'views/main [blocks/when-block {:test 'cond} [:text {} ""]]}}
        (reader/parse {:components {'text :text}} (extension {'views/main (list 'when 'cond ['text {} ""])}))))
  (is (=  {:data {'meta default-meta 'views/main nil}
           :errors (list {::errors/type ::errors/unsupported-test-type ::errors/value "string" :key 'views/main})}
          (reader/parse {:components {'text :text}} (extension {'views/main (list 'when "string" ['text {} ""])})))))
