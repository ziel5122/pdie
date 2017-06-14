import Express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
/*
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
*/
// import { serverDevConfig } from '../webpack.config';
import configureStore from './store/configureStore';
import App from './App';

const app = Express();
const env = process.env.NODE_ENV || 'production';
const port = process.env.PORT || 3001;
/*
if (env === 'development') {
  const compiler = webpack(serverDevConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: '/',
  }));
  app.use(webpackHotMiddleware(compiler));
}
*/
// define the folder that will be used for static assets
// app.use(express.static(path.join(__dirname, '..', 'public')));

const renderFullPage = (html, preloadedState) => (
`
<!doctype html>
<html style="height:100%;background-color:rgb(${preloadedState.color.red}, ${preloadedState.color.green}, ${preloadedState.color.blue});margin:0;">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>imagengine</title>
    <link rel="icon" href="panafold.d5ed2a10bb9fefd6c6ed482ac0f53d95">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <style>
      #github {
        height: 3vh;
      }
    </style>
  </head>
  <body style="margin:8px;">
    <div id="root">${html}</div>
    <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
    </script>
  </body>
</html>
`
);

const handleRender = (req, res) => {
  const store = configureStore();

  global.navigator = global.navigator || {};
  global.navigator.userAgent = req.headers['user-agent'] || 'all';

  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  res.send(renderFullPage(html, store.getState()));
};

app.use(handleRender);

// start the server
app.listen(port, (err) => {
  if (err) return console.error(err);

  return console.info(
    `
      Server running on http://localhost:${port} [${env}]
      Universal rendering: ${process.env.UNIVERSAL ? 'enabled' : 'disabled'}
    `
  );
});
