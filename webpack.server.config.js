require('babel-register');

var path = require('path');

var config = {
  entry: {
    server: path.join(__dirname, 'src/server.js'),
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.png$/,
        include: path.join(__dirname, 'img'),
        loader: 'file-loader',
      }
    ],
  },
  node: {
    child_process: 'empty',
    fs: 'empty',
    module: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};

module.exports = config;
