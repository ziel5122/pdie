import express from 'express';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';

import config from '../webpack.config.client.babel';
import Main from './main';
import reducers from './reducers';
import styles from './styles';
import { renderHtml } from './ssr/render';

const app = express();

const devMiddlewareConfig = {
  noInfo: true,
  stats: {
    colors: true
  },
  publicPath: config.output.publicPath
};

const hotMiddlewareConfig = {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
};

const compiler = webpack(config);
app.use(devMiddleware(compiler, devMiddlewareConfig));
app.use(hotMiddleware(compiler, hotMiddlewareConfig));

const store = createStore(reducers);

const appHtml = renderToString(<Main store={store} />);

const html = renderHtml(appHtml, store);

app.get('*', (req, res) => {
  res.send(appHtml);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
