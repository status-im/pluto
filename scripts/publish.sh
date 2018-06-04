mkdir -p docs/assets
clj -m cljs.main -v -O advanced -d target/js -o target/js/pluto.js -c pluto.demo
cp target/js/pluto.js docs/assets
cp -R resources/public/assets/* docs/assets
cp resources/public/index.html docs/
