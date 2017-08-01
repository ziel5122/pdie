import { join } from 'path';

const APP_DIR = join(__dirname, 'src');

console.log(APP_DIR);

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

Object.keys(config.entry).forEach((entryName) => {
    console.log(`Bundling ${entryName}.bundle.js`);
    console.log(`via entry: ${APP_DIR}/${config.entry[entryName]}`);
    console.log(`to ${config.output.path}/${entryName}.bundle.js`)
    console.log();
});

export default config;
