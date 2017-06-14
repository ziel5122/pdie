import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { DefinePlugin } from 'webpack';

const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'public');
const IMG_DIR = path.resolve(__dirname, 'img');

dotenv.config();

const devJsLoader = {
  test: /\.js$/,
  loaders: [
    'babel-loader',
  ],
  include: APP_DIR,
};

const prodJsLoader = {
  ...devJsLoader,
  loaders: [
    ...devJsLoader.loaders,
    'eslint-loader',
  ],
}

const loaders = [
  {
    test: /\.png$/,
    loader: 'url-loader?limit=8192!file-loader',
    query: {
      name: '[name].[hash].[ext]',
    },
  },
];

const devLoaders = [
  ...loaders,
  devJsLoader,
];

const prodLoaders = [
  ...loaders,
  prodJsLoader,
];

const config = {
  resolve: {
    extensions: ['.js']
  },
}

const devConfig = {
  ...config,
  devtool: 'eval',
  module: {
    loaders: devLoaders,
  },
};

const prodConfig = {
  ...config,
  devtool: 'source-map',
  module: {
    loaders: prodLoaders,
  },
};

const clientConfig = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'client-bundle.js'
  },
};

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(x => (['.bin'].indexOf(x) === -1))
  .forEach(mod => nodeModules[mod] = 'commonjs ' + mod);

const serverConfig = {
  entry: APP_DIR + '/server.js',
  output: {
    path: BUILD_DIR,
    filename: 'server-bundle.js'
  },
  plugins: [
    new DefinePlugin({
      process: {
        env: {
          PORT: JSON.stringify(process.env.PORT),
        }
      }
    }),
  ],
  externals: nodeModules,
};

const clientDevConfig = {
  ...devConfig,
  ...clientConfig,
};

const clientProdConfig = {
  ...prodConfig,
  ...clientConfig,
};

const serverDevConfig = {
  ...devConfig,
  ...serverConfig,
};

const serverProdConfig = {
  ...prodConfig,
  ...serverConfig,
};

export { clientDevConfig, clientProdConfig, serverDevConfig, serverProdConfig };
