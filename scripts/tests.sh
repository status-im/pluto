clojure -Sdeps '{:deps {eftest {:mvn/version "0.5.2"}} :paths ["src" "test"]}' -e "(require '[eftest.runner :refer [find-tests run-tests]]) (run-tests (find-tests \"test\"))"
clojure -A:test-cljs
