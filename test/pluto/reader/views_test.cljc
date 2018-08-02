(ns pluto.reader.views-test
  (:require [clojure.test :refer [is deftest testing]]
            [pluto.reader.blocks :as blocks]
            [pluto.reader.errors :as errors]
            [pluto.reader.views :as views]))

(deftest parse-hiccup-children
  (is (=  {:data (list [:text {} ""])} (views/parse-hiccup-children {:capacities {:components {'text :text}}}
                                                                    (list ['text {} ""])))))

(defn- first-error-type [m]
  (::errors/type (first (:errors m))))

(deftest parse
  #_
  (is (= ::errors/invalid-view (first-error-type (views/parse {} {}))))
  #_
  (is (= ::errors/invalid-view
         (first-error-type (views/parse {:capacities {:components {'text :text}}} ['text "Hello"]))))
  #_
  (is (= ::errors/invalid-view
         (first-error-type (views/parse {:capacities {:components {'text :text}}} ['text {} []]))))
  (is (= {:data   ['text {} "Hello"]
          :errors (list {::errors/type ::errors/unknown-component ::errors/value 'text})}
         (views/parse {} ['text {} "Hello"])))
  (is (= {:data [:text {} "Hello"]}
         (views/parse {:capacities {:components {'text :text}}} ['text {} "Hello"])))
  (is (= {:data [:text {} "Hello"]}
         (views/parse {:capacities {:components {'text :text}}} ['text {} "Hello"])))
  (is (= {:data [:view
                  {}
                  [:text {} "Hello"]
                  [blocks/let-block
                   {:env {'cond? '@queries/random-boolean}}
                   [blocks/if-block
                     {:test 'cond?}
                     [:text {:style {:color "green"}} "World?"]
                     [:text {:style {:color "red"}} "World?"]]]]}
         (views/parse {:capacities {:components {'text :text
                                                 'view :view}}}
                      '[view {}
                        [text {} "Hello"]
                        (let [cond? @queries/random-boolean]
                          (if cond?
                            [text {:style {:color "green"}}
                             "World?"]
                            [text {:style {:color "red"}}
                             "World?"]))])))
  (testing "Properties"
    (is (= {:data [:text {} "Hello"]}
           (views/parse {:capacities {:components {'text :text}}} ['text {} "Hello"])))))

