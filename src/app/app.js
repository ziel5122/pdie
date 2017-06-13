import ActionSearch from 'material-ui/svg-icons/action/search';
import ContentClear from 'material-ui/svg-icons/content/clear';
import ImageAddToPhotos from 'material-ui/svg-icons/image/add-to-photos';
import TextField from 'material-ui/TextField';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import githubLogo from '../../img/GitHub-Mark-32px.png';
import Header from '../Header';
import panafoldLogo from '../../img/panafold.png';

import styles from './styles';

injectTapEventPlugin();

const Actions = () => (
  <div style={styles.actions}>
    <ImageAddToPhotos />
    <TextField id="search" />
    <ActionSearch />
    <ContentClear />
  </div>
);

const HeaderText = () => (
  <div style={styles.headerText}>
    <span style={styles.textImage}>image</span>
    <span style={styles.textNgine}>ngine</span>
  </div>
);

const App = () => (
  <div>
    <Header
      actions={Actions}
      icons={{
        left: panafoldLogo,
        right: githubLogo,
      }}
      text={HeaderText}
    />
  </div>
);

export default App;
