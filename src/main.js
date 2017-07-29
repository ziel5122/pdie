import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import reducers from './reducers';

let store;
if (typeof window === 'undefined') {
  store = createStore(reducers);
} else {
  const preloadedState = window.__PRELOADED_STATE;
  delete window.__PRELOADED_STATE;
  store = createStore(reducers, preloadedState);
}

const muiTheme = getMuiTheme({
  userAgent: 'all',
});

const Main = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
);

export default Main;
