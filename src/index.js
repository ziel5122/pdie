import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore } from 'redux';

import App from './App';
import reducers from './reducers';

injectTapEventPlugin();

const preloadedState = window.__PRELOADED_STATE;
delete window.__PRELOADED_STATE;

const store = createStore(reducers, preloadedState);

const muiTheme = getMuiTheme({
  userAgent: 'all',
});

render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

store.dispatch({
  renderLocation: 'client',
  type: 'SET_RENDER_LOCATION',
});
