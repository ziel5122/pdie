import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const MainMui = () => (
  <Provider store={window.__PRELOADED_STATE__}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(
  <MainMui />,
  document.getElementById('root'),
);
