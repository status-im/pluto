mkdir -p demo
clj -R:repl build.clj compile once
cp resources/public/assets/pluto.js demo/
cp resources/public/index.html demo/
