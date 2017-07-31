import { join } from 'path';

const APP_DIR = join(__dirname, 'src');

const config = {
  context: APP_DIR,
  entry: {
    server: [
      './server.js',
    ],
  },
  module: {
    rules: [
      {
        include: APP_DIR,
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.jpg$/,
        use: 'url-loader',
      },
    ],
  },
  node: {
    __dirname: true,
  },
  output: {
    filename: '[name].bundle.js',
    path: join(__dirname, 'build'),
  },
  target: 'node',
};

export default config;
