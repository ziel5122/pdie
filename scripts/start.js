import { cyan, green, red, yellow } from 'chalk';
import dotenv from 'dotenv';
import clearConsole from 'react-dev-utils/clearConsole';
import formatWebpackMessages from 'react-dev-utils/formatWebpackMessages';
import webpack from 'webpack';

import { clientDevConfig } from '../webpack.config';

dotenv.config();

process.env.NODE_ENV = 'development';

const compiler = webpack(clientDevConfig);

// bundle is invalidated on change
compiler.plugin('invalid', () => {
  clearConsole();
  console.log('Compiling...');
});

compiler.watch(null, (err, stats) => {
  clearConsole();

  const messages = formatWebpackMessages(status.toJson({}, true));
  const isSuccessful = !messages.errors.length && !messages.warnings.length;

  if (isSuccessful) {
    console.log(green('Client compiled successfully!'));
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
