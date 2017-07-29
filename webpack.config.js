require('babel-register');

const { join, resolve } = require('path');
const { v4 } = require('uuid');
const {
  DefinePlugin,
  HotModuleReplacementPlugin,
} = require('webpack');

const APP_DIR = join(__dirname, 'src');

const config = {
  context: APP_DIR,
  entry: {
    app: [
      'webpack-hot-middleware/client',
      './index.js',
    ],
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
      {
        test: /\.png$/,
        use: [
          'file-loader',
          'image-webpack-loader',
        ],
      },
    ],
  },
  output: {
    path: resolve(__dirname, 'src'),
    filename: '[name].js',
    publicPath: '/'
  },
};

module.exports = config;
