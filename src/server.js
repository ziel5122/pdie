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
import { renderHtml } from './ssr/render';

const store = createStore(reducers);

//const appHtml = renderToString(<Main store={store} />);
const appHtml = '';

const html = renderHtml(appHtml, store);

const app = express();

app.use(express.static('build'));

app.get('*', (req, res) => {
  res.send(html);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
