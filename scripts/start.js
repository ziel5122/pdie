import { cyan, green, red, yellow } from 'chalk';
import dotenv from 'dotenv';
import clearConsole from 'react-dev-utils/clearConsole';
import formatWebpackMessages from 'react-dev-utils/formatWebpackMessages';
import webpack from 'webpack';

import { devConfig } from '../webpack.config';

dotenv.config();

process.env.NODE_ENV = 'development';

const PORT = process.env.PORT || 3000;

console.log(process.env.REACT_APP_PORT);

const compiler = webpack(devConfig);

// bundle is invalidated on change
compiler.plugin('invalid', () => {
  clearConsole();
  console.log('Compiling...');
});

compiler.watch({
  aggregateTimeout: 300,
  poll: true,
}, (err, status) => {
  clearConsole();

  const messages = formatWebpackMessages(status.toJson({}, true));
  const isSuccessful = !messages.errors.length && !messages.warnings.length;

  if (isSuccessful) {
    console.log(green('Compiled successfully!'));
    console.log();
    console.log('The app is running at:');
    console.log();
    console.log(`  ${cyan(`${protocol}://${host}:${port}/`)}`);
    console.log();
    console.log('Note that the development build is not optimized.');
    console.log(`To create a production build, use ${cyan(`${cli} run build`)}.`);
    console.log();
  }

  // If errors exist, only show errors.
  if (messages.errors.length) {
    console.log(red('Failed to compile.'));
    console.log();
    messages.errors.forEach((message) => {
      console.log(message);
      console.log();
    });
    return;
  }

  // Show warnings if no errors were found.
  if (messages.warnings.length) {
    console.log(yellow('Compiled with warnings.'));
    console.log();
    messages.warnings.forEach((message) => {
      console.log(message);
      console.log();
    });
  }
});
