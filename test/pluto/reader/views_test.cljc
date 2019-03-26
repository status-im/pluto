(ns pluto.reader.views-test
  (:refer-clojure :exclude [resolve])
  (:require [clojure.test :refer [is deftest testing]]
            [pluto.error         :as error]
            [pluto.reader.types  :as types]
            [pluto.reader.views  :as views]))

(deftest parse-hiccup-children
  (is (=  {:data (list [:text {} ""])}
          (views/parse-hiccup-children {:capacities {:components {'text {:value :text}}}}
                                       {}
                                       nil
                                       (list ['text {} ""])))))

(defn- first-error-type [m]
  (::error/type (first (:errors m))))

(deftest parse
  #_
  (is (= ::error/invalid-view (first-error-type (views/parse {} {}))))
  #_
  (is (= ::error/invalid-view
         (first-error-type (views/parse {:capacities {:components {'text {:value :text}}}} ['text "Hello"]))))
  #_
  (is (= ::error/invalid-view
         (first-error-type (views/parse {:capacities {:components {'text {:value :text}}}} ['text {} []]))))
  #_
  (is (= {:data   ['text {} "Hello"]
          :errors (list {::error/type ::error/unknown-component ::error/value 'text})}
         (views/parse {} ['text {} "Hello"])))
  (is (= {:data [:text {} "Hello"]}
         (views/parse {:capacities {:components {'text {:value :text}}}} {} ['text {} "Hello"])))
  #_
  (is (= {:errors [(errors/error ::error/unresolved-properties #{'a})]}
         (views/parse {:capacities {:components {'text {:value :text}}}} {} ['text {} 'a])))
  (is (empty?
        (:errors (views/parse {:capacities {:queries {'random-boolean {:value :value}}
                                            :components {'text {:value :text}
                                                         'view {:value :view}}}}
                              {}
                              '[view
                                [text {} "Hello"]
                                (let [cond? [random-boolean]]
                                  (if cond?
                                    [text {:style {:color "green"}}
                                     "World?"]
                                    [text {:style {:color "red"}}
                                     "World?"]))]))))
  (testing "Properties"
    (is (= {:data [:text {} "Hello"]}
           (views/parse {:capacities {:components {'text {:value :text}}}} {} ['text {} "Hello"])))))

(deftest resolve
  (is (= [:text "Hello"] ((:data (types/resolve {:capacities {:components {'text {:value :text}}}} {'views/main ['text "Hello"]} :view ['views/main])) {})))
  (is (= {:errors [{::error/type  ::error/unknown-reference
                    ::error/value {:value 'views/unknown :type :view}}]}
         (types/resolve {:capacities {:components {'text {:value :text}}}} {'views/main ['text "Hello"]} :view ['views/unknown]))))

(deftest invalid-view-element-spec-errors
  (letfn [(p [view] (views/parse
                     {:capacities {:components {'text {:properties {:asdf :string}
                                                       :value :text}}}}
                     {}
                     view))]
    (is (= (first-error-type (p '[text :sadf]))
           ::error/invalid-view))
    (is (= (first-error-type (p '[text {} {}]))
           ::error/invalid-view))
    
    (is (not (:errors (p '[text [text]]))))
    (is (not (:errors (p '[text {} 1 2 3 4 asdf]))))

    (is (= (first-error-type (p '[text {asdf "asdf"}]))
           ::error/invalid-property-map))))

(deftest unresolved-properties
  (is (= #{} (views/unresolved-properties #{} [:view {} ""])))
  (is (= #{'a} (views/unresolved-properties #{} [:view {} 'a])))
  (is (= #{'a} (views/unresolved-properties #{} [:view {} [:view 'a]])))
  (is (= #{'a} (views/unresolved-properties #{} [:view {:style {:key 'a}} ""])))
  (is (= #{'a} (views/unresolved-properties #{} [:view {:style [:event ['a]]}])))
  (is (= #{'a} (views/unresolved-properties #{} [:view {:style [:event {:params {:title 'a}}]}])))
  (is (= #{'a} (views/unresolved-properties #{} [:view {} [:view {} 'a]]))))
