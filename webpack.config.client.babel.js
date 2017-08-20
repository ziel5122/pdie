import { join } from 'path';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import webpack from 'webpack';
const APP_DIR = join(__dirname, 'src');

const config = {
  context: APP_DIR,
  devtool: 'source-map',
  entry: {
    client: [
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
        test: /\.(jpg|png)$/,
        use: [
          'url-loader'
        ],
      },
    ],
  },
  node: {
    child_process: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  output: {
    path: join(__dirname, 'build'),
    filename: '[name].bundle.js',
  },
  plugins: [
    /*
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
    */
    new webpack.optimize.CommonsChunkPlugin({
      filename: 'node-static.js',
      minChunks({ context }, count) {
        return context && context.indexOf('node_modules') >= 0;
      },
      name: 'node-static',
    }),
  ],
};

export default config;
