clojure -m cljs.main -O advanced -d website/static/js -o website/static/js/pluto.js -c pluto.js
cd website
GIT_USER=jeluard\
CURRENT_BRANCH=#2 \
  USE_SSH=true \
  yarn run publish-gh-pages
cd ..
