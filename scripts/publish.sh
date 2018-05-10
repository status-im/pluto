mkdir -p demo/assets
clj -R:repl build.clj compile once
cp resources/public/assets/*.js demo/assets
cp resources/public/index.html demo/
