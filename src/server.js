import dotenv from 'dotenv';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from './App';
import { devMiddleware } from '../dev/webpack-server';

dotenv.config();

const app = process.env.NODE_ENV === 'production' ? express() : devMiddleware();

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
    <script src="/static/bundle2.js" type="text/babel"></script>
  </body>
</html>
`

app.get('*', (req, res) => {
  res.send(html);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
