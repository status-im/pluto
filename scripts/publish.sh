clojure -A:examples -m cljs.main -O advanced -d website/static/js -o website/static/js/pluto.js -c pluto.examples
cp -R examples/resources/extensions website/static
cp figwheel/resources/public/index.html website/pages/examples.html
cd website
GIT_USER=jeluard\
CURRENT_BRANCH=#2 \
  USE_SSH=true \
  yarn run publish-gh-pages
cd ..
