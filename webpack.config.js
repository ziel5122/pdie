require('babel-register');

const { join, resolve } = require('path');
const { v4 } = require('uuid');
const {
  DefinePlugin,
  HotModuleReplacementPlugin,
} = require('webpack');

const APP_DIR = join(__dirname, 'src');

const config = {
  devtool: 'cheap-eval-source-map',
  context: APP_DIR,
  entry: [
    'webpack-hot-middleware/client',
    './index.js',
  ],
  output: {
    path: resolve(__dirname,'src'),
    filename: 'client-bundle2.js',
    publicPath: '/'
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
      {
        include: join(__dirname, 'img'),
        test: /\.png$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    //new NoErrorsPlugin(),
  ],
};

module.exports = config;
