import { readdirSync } from 'fs';
import { join } from 'path';

const APP_DIR = join(__dirname, 'src');

const nodeModules = {};
readdirSync('node_modules')
  .filter((x) => ['.bin'].indexOf(x) === -1)
  .forEach((mod) => { nodeModules[mod] = `commonjs ${mod}`});

const config = {
  context: APP_DIR,
  entry: {
    server: [
      './server.js',
    ],
  },
  externals: nodeModules,
  module: {
    rules: [
      {
        exclude: join(__dirname, 'node_modules'),
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.jpg$/,
        use: 'url-loader',
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: join(__dirname, 'build'),
  },
  target: 'node',
};

export default config;
