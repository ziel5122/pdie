import Paper from 'material-ui/Paper';
import React from 'react';

import Body from '../Body';
import Gallery from '../Gallery';
import Header from '../Header';
import ImageInput from './ImageInput';
import RenderLocation from './RenderLocation';
import styles from './styles';

const App = () => (
  <div style={styles.app}>
    <ImageInput />
    <span>This HTML was rendered on the </span>
    <RenderLocation />
    <Paper>
      <Header />
    </Paper>
    <Paper>
      <Body />
    </Paper>
    <Paper style={{ background: 'orange' }}>
      <Gallery />
    </Paper>
  </div>
);

export default App;
