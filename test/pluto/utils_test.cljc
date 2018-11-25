(ns pluto.utils-test
    (:refer-clojure :exclude [slurp])
    (:require [clojure.test :refer [is deftest testing]]
      [pluto.utils :as utils] [pluto.utils :as utils]))

#?(:clj
 (defmacro slurp [file]
   (clojure.core/slurp file)))

(deftest interpolate
  (is (= "test-3" (utils/interpolate {'id 3} "test-${id}"))))
