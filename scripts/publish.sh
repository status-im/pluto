mkdir -p docs/assets
clj -R:repl build.clj compile once
cp -R resources/public/assets/* docs/assets
cp resources/public/index.html docs/
