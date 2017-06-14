import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import counterStore from './reducers';
import Counter from './Counter';

const app = Express();
const port = process.env.PORT || 3000;

const renderFullPage = (html, preloadedState) => (
`
<!doctype html>
<html>
  <head>
    <title>Redux Universal Example</title>
  </head>
  <body>
    <div id="root">${html}</div>
    <script>
      // WARNING: See the following for security issues around embedding JSON in HTML:
      // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
    </script>
  </body>
</html>
`
);

const handleRender = (req, res) => {
  // Create a new Redux store instance
  const store = createStore(counterStore);

  const Render = () => {
    console.log('Render');

    return (
      <Counter
        value={store.getState()}
        onIncrement={() => {
          console.log('inc click');
          /*
          store.dispatch({
            type: 'INCREMENT',
          });
          console.log(store.getState());
          */
        }}
        onDecrement={() => {
          console.log('dec click');
          /*
          store.dispatch({
            type: 'DECREMENT',
          });
          console.log(store.getState());
          */
        }}
      />
    );
  };

  // Render the component to a String
  const html = renderToString(
    <Provider store={store}>
      <Render />
    </Provider>
  );

  store.subscribe(Render);

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState));
};

app.use('/static', Express.static('static'));

app.use(handleRender);

app.listen(port);
