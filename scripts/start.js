import dotenv from 'dotenv';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';

import App from '../src/App';
import config from '../webpack.config.js';
import { renderHtml } from '../src/ssr/render';

dotenv.config();

const compiler = webpack(config);
const devMiddlewareConfig = {
  noInfo: true,
  stats: {colors: true},
  publicPath: config.output.publicPath
}

const app = express();
app.use(devMiddleware(compiler, devMiddlewareConfig));
app.use(hotMiddleware(compiler));

const html = renderToString(<App />);
app.get('*', (req, res) => {
  res.send(renderHtml(html));
});

const port = process.env.PORT || 3000;
app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
