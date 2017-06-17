import dotenv from 'dotenv';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';
import hotReplacement from 'webpack-hot-middleware';

import App from './App';
import config from '../webpack.config';
import { renderHtml } from './ssr/render';

dotenv.config();

const middlewareConfig = {
  noInfo: true,
  stats: {colors: true},
  publicPath: config.output.publicPath
};

const app = express();
const compiler = webpack(config);

app.use(middleware(compiler, middlewareConfig));
app.use(hotReplacement(compiler));

const appHtml = renderToString(<App />);

const html = `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <div id="root">${appHtml}</div>
    <script src="/static/bundle2.js"></script>
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
