import { join } from 'path';

const APP_DIR = join(__dirname, 'src');

const config = {
  context: APP_DIR,
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
        test: /\.jpg$/,
        use: [
          'url-loader'
        ],
      },
    ],
  },
  output: {
    path: join(__dirname, 'build'),
    filename: '[name].bundle.js',
  },
};

export default config;
