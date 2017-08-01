import { join, resolve } from 'path';
import { v4 } from 'uuid';
import { HotModuleReplacementPlugin } from 'webpack';

const APP_DIR = resolve(__dirname, 'src');

console.log(APP_DIR);

const config = {
  context: APP_DIR,
  entry: [
      'index.js',
  ],
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
        test: /\.jpg$/,
        use: [
          'url-loader'
        ],
      },
    ],
  },
  output: {
    path: APP_DIR,
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HotModuleReplacementPlugin(),
  ],
};

export default config;
