import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

import Main from './Main';
import reducers from './reducers';

render(
  <Main store={createStore(reducers, window.__PRELOADED_STATE)} />,
  document.getElementById('root')
);

delete window.__PRELOADED_STATE;

store.dispatch({
  renderLocation: 'client',
  type: 'SET_RENDER_LOCATION',
});
