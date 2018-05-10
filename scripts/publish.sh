mkdir -p docs/assets
clj -R:repl build.clj compile once
cp resources/public/assets/*.js docs/assets
cp resources/public/index.html docs/
