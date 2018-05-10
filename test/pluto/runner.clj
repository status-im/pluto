(ns pluto.runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [pluto.reader-test]
            [pluto.reader.blocks-test]))

(doo-tests 'pluto.reader-test
           'pluto.reader.blocks-test)
