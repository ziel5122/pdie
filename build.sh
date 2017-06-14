npm install
rm -rf build/*
babel-node scripts/build.js
cp -r public build/public
babel src/server.js -d build
cp package.json build
