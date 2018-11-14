(ns pluto.reader-test
  (:refer-clojure :exclude [read])
  (:require [clojure.test        :refer [is deftest]]
            [pluto.reader        :as reader]
            [pluto.reader.blocks :as blocks]
            [pluto.reader.errors :as errors]))

(deftest read
  (is (= {:data nil} (reader/read "")))
  (is (= {:errors [{::errors/message "No reader function for tag =."
                    ::errors/type ::errors/reader-error ::errors/value :reader-error}]}
         (reader/read "#=(eval (def x 3))")))
  (is (= {:errors [{::errors/type ::errors/reader-error ::errors/value :eof ::errors/message "Unexpected EOF while reading item 0 of vector."}]} (reader/read "[")))
  (is (= {:errors [{::errors/type ::errors/reader-error ::errors/value :reader-error ::errors/message "No reader function for tag unknown."}]}
         (reader/read "#unknown []")))
  (is (= {:data {:extension/main 'view/main
                 :views/main     ['view {}
                                  ['text "Hello"]
                                  (list 'let ['cond? 'queries/random-boolean]
                                    (list 'when 'cond?
                                      ['text {}
                                       "World"]))]}}
         (reader/read
           "{:extension/main view/main

             :views/main
              [view {}
                [text \"Hello\"]
                  (let [cond? queries/random-boolean]
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
  (is (= [{::errors/type ::errors/invalid-key ::errors/value 'hooks/test.id}]
         (reader/validate {} (extension {'hooks/test.id {:hook-id :a}}))))
  (is (= nil
         (reader/validate {:capacities {:hooks {:main {}}}}
                          (extension {'hooks/main.id {:hook-id :a}}))))
  (is (= [{::errors/type ::errors/invalid-key ::errors/value 'hooks/unknown.id}]
         (reader/validate {:capacities {:hooks {:main {}}}}
                          (extension {'hooks/main.id    {:hook-id :a}
                                      'hooks/unknown.id {:hook-id :b}}))))
  (is (= [{::errors/type ::errors/invalid-key ::errors/value 'unknown/unknown.id}]
         (reader/validate {} (extension {'unknown/unknown.id {}}))))
  (is (= nil
         (reader/validate {:capacities {:hooks {:some.ns {}}}} (extension {'hooks/some.ns.id {}})))))

(def default-hooks {:main {:properties {:view :view}}})
(def default-components {'text :text 'view :view})
(def default-capacities {:capacities {:hooks default-hooks :components default-components}})

(defn view [m]
  ((get-in m [:data :hooks :main :a :parsed :view]) {}))

(deftest parse-blocks
  (is (= [blocks/let-block
          '{:bindings [s "Hello"]
            :prev-env {:pluto.reader/properties {}}}
          '[text {} s]]
         (view (reader/parse default-capacities
                             (extension {'views/main   (list 'let ['s "Hello"] ['text {} 's])
                                         'hooks/main.a {:view ['views/main]}})))))
  (is (= [blocks/when-block {:test 'cond} '[text {} ""]]
         (view (reader/parse default-capacities
                             (extension {'views/main  (list 'when 'cond ['text {} ""])
                                         'hooks/main.a {:view ['views/main]}})))))
  (is (= {:data {'meta default-meta
                 :hooks {:main {:a {:parsed   nil
                                    :hook-ref (:main default-hooks)}}}}
          :errors (list {::errors/type ::errors/unsupported-test-type ::errors/value "string"})}
         (reader/parse default-capacities (extension {'views/main  (list 'when "string" ['text {} ""])
                                                      'hooks/main.a {:view ['views/main]}})))))

(deftest parse
  (is (= (list {::errors/type ::errors/unknown-component ::errors/value 'text})
         (:errors (reader/parse {:capacities {:hooks default-hooks}}
                                (extension {'views/main  ['text {} "Hello"]
                                            'hooks/main.a {:view ['views/main]}})))))
  (is (= '[text {} "Hello"]
         (view (reader/parse default-capacities
                             (extension {'views/main  ['text {} "Hello"]
                                         'hooks/main.a {:view ['views/main]}}))))))
