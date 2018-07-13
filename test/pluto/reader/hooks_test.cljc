(ns pluto.reader.hooks-test
  (:require [clojure.test :refer [is deftest]]
            [pluto.reader.hooks :as hooks]))

(deftest resolve-hook-property
  (is (= {:data "value"} (hooks/resolve-property {} {} {:name :string :type :string} {:string "value"})))
  (is (= {:data [:text {} ""]}
         (hooks/resolve-property {:capacities {:components {'text :text}}}
                                 {'views/id ['text {} ""]}
                                 {:type :view :name :view}
                                 {:view '@views/id}))))

(deftest parse-hook
  (is (= {:data {'hooks/main.1 {:view [:text {} ""]}}}
         (hooks/parse {:capacities {:hooks {'hooks/main {:properties [{:name :view  :type :view}]}} :components {'text :text}}}
                      {'views/main ['text {} ""]
                       'hooks/main.1 {:view '@views/main}}))))
