import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';

import App from './app';

export default () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);
