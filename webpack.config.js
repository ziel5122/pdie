var path = require('path');

var APP_DIR = path.join(__dirname, 'src/');

module.exports = {
  entry: APP_DIR + 'index.js',
  output: {
    path: APP_DIR,
    filename: 'client-bundle.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: APP_DIR,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
};
