require('babel-register');

const { join, resolve } = require('path');
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
    filename: 'bundle2.js',
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
    //new NoErrorsPlugin(),
    new DefinePlugin({
      'process.env.RENDER_LOCATION': 'client',
    }),
  ],
};

module.exports = config;
