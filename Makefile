.PHONY: dev

compile:
	clojure -m cljs.main -O advanced -d target -o target/pluto.core -c pluto.core

dev:
	clojure -A:dev

install:
	lein install

tests:
	clojure -A:test-clj
	clojure -A:test-cljs
