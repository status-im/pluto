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

(def default-meta {:name "" :description "" :documentation ""})

(defn extension [m]
  (assoc m 'meta default-meta))

(deftest validate
  (is (= [{::errors/type ::errors/missing-keys ::errors/value #{'meta}}]
         (reader/validate {} {})))
  (is (= nil
         (reader/validate {} {'meta default-meta})))
  (is (= [{::errors/type ::errors/invalid-meta ::errors/value {}}]
         (reader/validate {} {'meta {}})))
  (is (= [{::errors/type ::errors/invalid-key ::errors/value 'hooks/test.1}]
         (reader/validate {} (extension {'hooks/test.1 {}}))))
  (is (= nil
         (reader/validate {:capacities {:hooks {'main {}}}} (extension {'hooks/main.1 {}}))))
  (is (= [{::errors/type ::errors/invalid-key ::errors/value 'hooks/unknown.1}]
         (reader/validate {:capacities {:hooks {'main {}}}} (extension {'hooks/main.1 {} 'hooks/unknown.1 {}}))))
  (is (= [{::errors/type ::errors/invalid-key ::errors/value 'events/unknown}]
         (reader/validate {:capacities {:events {'main {}}}} (extension {'events/main {} 'events/unknown {}}))))
  (is (= [{::errors/type ::errors/invalid-key ::errors/value 'queries/unknown}]
         (reader/validate {:capacities {:queries {'main {}}}} (extension {'queries/main {} 'queries/unknown {}}))))
  (is (= [{::errors/type ::errors/invalid-key ::errors/value 'unknown/unknown}]
         (reader/validate {} (extension {'unknown/unknown {}})))))

(def default-hooks {'hooks/main {:properties {:view :view}}})
(def default-components {'text :text 'view :view})
(def default-capacities {:capacities {:hooks default-hooks :components default-components}})

(deftest parse-blocks
  (is (=  {:data {'meta default-meta 'hooks/main.1 {:view [blocks/let-block {:env {'s "Hello"}} [:text {} 's]]}}}
          (reader/parse default-capacities (extension {'views/main (list 'let ['s "Hello"] ['text {} 's])
                                                       'hooks/main.1 {:view '@views/main}}))))
  (is (=  {:data {'meta default-meta 'hooks/main.1 {:view [blocks/when-block {:test 'cond} [:text {} ""]]}}}
        (reader/parse default-capacities (extension {'views/main (list 'when 'cond ['text {} ""])
                                                     'hooks/main.1 {:view '@views/main}}))))
  (is (=  {:data {'meta default-meta 'hooks/main.1 nil}
           :errors (list {::errors/type ::errors/unsupported-test-type ::errors/value "string"})}
          (reader/parse default-capacities (extension {'views/main (list 'when "string" ['text {} ""])
                                                       'hooks/main.1 {:view '@views/main}})))))

(deftest parse
  (is (= {:data   {'meta default-meta 'hooks/main.1 {:view ['text {} "Hello"]}}
          :errors (list {::errors/type ::errors/unknown-component ::errors/value 'text})}
         (reader/parse {:capacities {:hooks default-hooks}} (extension {'views/main ['text {} "Hello"]
                                                                        'hooks/main.1 {:view '@views/main}}))))
  (is (= {:data {'meta default-meta 'hooks/main.1 {:view [:text {} "Hello"]}}}
         (reader/parse default-capacities (extension {'views/main ['text {} "Hello"]
                                                      'hooks/main.1 {:view '@views/main}})))))
