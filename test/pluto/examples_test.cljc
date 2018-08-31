(ns pluto.examples-test
  (:refer-clojure :exclude [read])
  (:require [clojure.test :refer [is deftest]]
            [pluto.reader :as reader]
            #?(:cljs [pluto.utils-test :include-macros true :refer [slurp]])))

(deftest examples
  (is (empty? (:errors (reader/parse {} (:data (reader/read (slurp "figwheel/resources/public/assets/extensions/demo/extension.edn"))))))))

