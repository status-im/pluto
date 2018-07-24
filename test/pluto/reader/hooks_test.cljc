(ns pluto.reader.hooks-test
  (:require [clojure.test :refer [is deftest]]
            [pluto.reader.errors :as errors]
            [pluto.reader.hooks :as hooks]))

(deftest resolve-property
  (is (= {:errors [{::errors/type ::errors/invalid-property-type
                    ::errors/value :unknown}]}
         (hooks/resolve-property {} {} {:name :string :type :unknown} {:string "value"})))
  (is (= {:errors [{::errors/type ::errors/invalid-property-name
                    ::errors/value :string}]}
         (hooks/resolve-property {} {} {:name :string :type :string} {:unknown "value"})))
  (is (= {:data "value"} (hooks/resolve-property {} {} {:name :string :type :string} {:string "value"})))
  (is (= {:errors [{::errors/type ::errors/invalid-property-value
                    ::errors/value 1}]}
         (hooks/resolve-property {} {} {:name :string :type :string} {:string 1})))
  (is (= {:data :value} (hooks/resolve-property {} {} {:name :keyword :type :keyword} {:keyword :value})))
  (is (= {:errors [{::errors/type ::errors/invalid-property-value
                    ::errors/value 1}]}
         (hooks/resolve-property {} {} {:name :keyword :type :keyword} {:keyword 1})))
  (is (= {:errors [{:pluto.reader.errors/type ::errors/missing-property-value
                    :pluto.reader.errors/value {:name :view :type :view}}]}
         (hooks/resolve-property {:capacities {:components {'text :text}}}
                                 {'views/id ['text {} ""]}
                                 {:type :view :name :view}
                                 {})))
  (is (= {:data [:text {} ""]}
         (hooks/resolve-property {:capacities {:components {'text :text}}}
                                 {'views/id ['text {} ""]}
                                 {:type :view :name :view}
                                 {:view '@views/id})))
  (is (= {:data :one} (hooks/resolve-property {} {} {:name :keyword :type #{:one :two :three}} {:keyword :one})))
  (is (= {:errors [{::errors/type ::errors/invalid-property-value
                    ::errors/value :for}]}
         (hooks/resolve-property {} {} {:name :keyword :type #{:one :two :three}} {:keyword :for}))))

(deftest parse-hook
  (is (= {:data {'hooks/main.1 {:view [:text {} ""]}}}
         (hooks/parse {:capacities {:hooks {'hooks/main {:properties [{:name :view  :type :view}]}} :components {'text :text}}}
                      {'views/main ['text {} ""]
                       'hooks/main.1 {:view '@views/main}}))))
