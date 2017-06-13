import MuiThemeProvuder from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import githubLogo from '../../img/GitHub-Mark-32px.png';
import Header from '../Header';
import panafoldLogo from '../../img/panafold.png';

injectTapEventPlugin();

const text = () => (
  <div>
    <span>image</span>
    <span>ngine</span>
  </div>
);

const App = () => (
  <div>
    <Header
      leftLogo={panafoldLogo}
      rightLogo={githubLogo}
      text={text}
    />
  </div>
);

export default App;
