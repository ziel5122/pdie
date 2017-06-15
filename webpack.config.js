require('babel-register');

const { join, resolve } = require('path');
const {
  HotModuleReplacementPlugin,
  NoEmitOnErrorsPlugin,
  NamedModulesPlugin,
} = require('webpack');

const APP_DIR = join(__dirname, 'src');

const config = {
  devtool: 'cheap-eval-source-map',
  context: APP_DIR,
  entry: {
    home: [
      'webpack-hot-middleware/client',
      './index.js'
    ]
  },
  output: {
    path: resolve(__dirname,'public/static'),
    filename: 'bundle.js',
    publicPath: '/static/'
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
  plugins: [
    new HotModuleReplacementPlugin(),
    new NoEmitOnErrorsPlugin(),
    new NamedModulesPlugin(),
  ],
};

module.exports = config;
