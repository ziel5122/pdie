import dotenv from 'dotenv';
import express from 'express';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';
import hotReplacement from 'webpack-hot-middleware';

import App from './App';
import config from '../webpack.config';
import { renderHtml } from './ssr/render';
import reducers from './reducers';

dotenv.config();

const middlewareConfig = {
  noInfo: true,
  stats: {colors: true},
  publicPath: config.output.publicPath
};

const app = express();

console.log(process.env.NODE_ENV || 'production');
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(config);
  app.use(middleware(compiler, middlewareConfig));
  app.use(hotReplacement(compiler));
}

const store = createStore(reducers);

const muiTheme = getMuiTheme({
  userAgent: 'all',
});

const appHtml = process.env.SSR ? renderToString(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
) : '';

const html = renderHtml(appHtml, store);

app.get('*', (req, res) => {
  res.send(html);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
