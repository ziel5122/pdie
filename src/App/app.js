import ActionSearch from 'material-ui/svg-icons/action/search';
import ContentClear from 'material-ui/svg-icons/content/clear';
import TextField from 'material-ui/TextField';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import githubLogo from '../../img/GitHub-Mark-32px.png';
import Header from '../Header';
import ImageButton from '../buttons/Image';
import panafoldLogo from '../../img/panafold.png';

import styles from './styles';

injectTapEventPlugin();

const Actions = () => (
  <div style={styles.actions}>
    <ImageButton />
    <TextField id="search" />
    <ActionSearch />
    <ContentClear />
  </div>
);

const App = () => (
  <Header />
);

export default App;