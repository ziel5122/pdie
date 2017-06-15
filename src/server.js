import dotenv from 'dotenv';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from './App';

dotenv.config();

const app = express();

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
    <script src="./client-bundle.js" type="text/babel"></script>
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
