import dotenv from 'dotenv';
import express from 'express';
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
const appHtml = renderToString(
  <Provider store={store}>
    <App />
  </Provider>
);

const html = `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <div id="root">${appHtml}</div>
    <script src="client-bundle2.js"></script>
    <script>
      // WARNING: See the following for security issues around embedding JSON in HTML:
      // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
      window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, '\\u003c')}
    </script>
  </body>
</html>
`;

app.get('*', (req, res) => {
  res.send(html);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
