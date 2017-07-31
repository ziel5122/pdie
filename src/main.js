import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App';

injectTapEventPlugin();

const Main = ({ store }) => (
  <MuiThemeProvider muiTheme={getMuiTheme({ userAgent: 'all' })}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
);

export default Main;
