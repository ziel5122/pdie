import MuiThemeProvuder from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Header from '../Header';
import logo from '../../img/panafold.png';

injectTapEventPlugin();

const App = () => (
  <div>
    <Header
      logo={logo}
      text="imagengine"
    />
  </div>
);

export default App;
