import { join } from 'path';

const renderHtml = (appHtml, store) => (`
<!doctype html><html style="height:100%">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body style="margin:0;height:100%">
    <div id="root" style="height:100%">${appHtml}</div>
    <script src="node-static.js"></script>
    <script src="client.bundle.js"></script>
    <script>
      // WARNING: See the following for security issues around embedding JSON in HTML:
      // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
      window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, '\\u003c')}
    </script>
  </body>
</html>
`);

export { renderHtml };
