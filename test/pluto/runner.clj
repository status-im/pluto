(ns pluto.runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [pluto.reader-test]))

(doo-tests 'pluto.reader-test)