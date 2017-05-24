import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';

import App from './_app';

export default () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);
