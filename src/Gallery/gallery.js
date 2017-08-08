import Paper from 'material-ui/Paper';
import React from 'react';

import styles from './styles';

const Gallery = () => (
  <div style={styles.gallery}>
    <Paper style={styles.img0} zDepth={0}>
      <div
        style={{
          backgroundColor: 'green',
          height: '100%',
        }}
      />
    </Paper>
    <Paper style={styles.img1}>
      <div
        style={{
          backgroundColor: 'blue',
          height: '100%',
        }}
      />
    </Paper>
    <Paper style={styles.img2}>
      <div
        style={{
          backgroundColor: 'purple',
          height: '100%',
        }}
      />
    </Paper>
    <Paper style={styles.img3}>
      <div
        style={{
          backgroundColor: 'red',
          height: '100%',
        }}
      />
    </Paper>
    <Paper style={styles.img4}>
      <div
        style={{
          backgroundColor: 'orange',
          height: '100%',
        }}
      />
    </Paper>
  </div>
);

export default Gallery;
