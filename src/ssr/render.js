const renderHtml = (html) => (
  `<!DOCTYPE html>
  <html>
    <head>
      <title>imagengine</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="/static/vendor.js" type="text/babel"></script>
      <script src="/static/bundle2.js"></script>
    </body>
  </html>`
);

export { renderHtml };

/*
<script>
  // WARNING: See the following for security issues around embedding JSON in HTML:
  // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
  window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
</script>
*/
