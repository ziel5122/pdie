import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import reducers from './reducers';

const preloadedState = window.__PRELOADED_STATE;
delete window.__PRELOADED_STATE;

const store = createStore(reducers, preloadedState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch({
  renderLocation: 'client',
  type: 'SET_RENDER_LOCATION',
});

console.log(store.getState());
