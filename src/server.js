import dotenv from 'dotenv';
import express from 'express';
import { createIsomorphicWebpack } from 'isomorphic-webpack';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';
import hotReplacement from 'webpack-hot-middleware';

import config from '../webpack.config';
import Main from './main';
import reducers from './reducers';
import styles from './styles';
import { renderHtml } from './ssr/render';

dotenv.config();

const middlewareConfig = {
  noInfo: true,
  stats: {colors: true},
  publicPath: config.output.publicPath
};

const app = express();

createIsomorphicWebpack(config);

const compiler = webpack(config);
app.use(middleware(compiler, middlewareConfig));
app.use(hotReplacement(compiler));

const store = createStore(reducers);

const muiTheme = getMuiTheme({
  userAgent: 'all',
});

//const appHtml = renderToString(<Main />);
const appHtml = '';

const html = renderHtml(appHtml, store);

app.get('*', (req, res) => {
  res.send(appHtml);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
