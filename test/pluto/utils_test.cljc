(ns pluto.utils-test
  (:refer-clojure :exclude [slurp])
  (:require [clojure.test :refer [is deftest testing]]
            [pluto.utils :as utils]))

#?(:clj
 (defmacro slurp [file]
   (clojure.core/slurp file)))
