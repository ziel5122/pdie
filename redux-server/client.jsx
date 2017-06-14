import { createStore } from 'redux';

import counterStore from './reducers';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const store = createStore(counterStore, preloadedState);

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root');
);
