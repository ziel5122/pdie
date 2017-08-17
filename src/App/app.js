import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import React from 'react';

import firebase from 'firebase/app';
import 'firebase/storage';

import Body from '../Body';
import Gallery from '../Gallery';
import Header from '../Header';
import styles from './styles';

let clientColor;
let serverColor;
let zDepth;

const App = ({ renderLocation }) => {
  if (renderLocation === 'server') {
    clientColor = 'lightblue';
    serverColor = 'black';
    zDepth = 0;
  } else {
    clientColor = 'black';
    serverColor = 'lightblue';
    zDepth = 1;
  }

  return (
    <div style={styles.app}>
      <div>
        <span
          style={{
            fontFamily: 'roboto, sans-serif',
          }}
        >
          {'This HTML was rendered on the '}
        </span>
        <span
          id="server"
          style={{
            color: serverColor,
            fontFamily: 'roboto, sans-serif',
          }}
        >
          {'server '}
        </span>
        <span
          id="client"
          style={{
            color: clientColor,
            fontFamily: 'roboto, sans-serif',
          }}
        >
          {'client.'}
        </span>
      </div>
      <Paper zDepth={zDepth} style={{ margin: '8px' }}>
        <Header style={styles.header} />
      </Paper>
      <Paper zDepth={zDepth} style={{ margin: '8px' }}>
        <Body
          style={{
            ...styles.body,
          }}
        />
      </Paper>
      <Paper zDepth={zDepth} style={{
          background: 'orange',
          marginLeft: '8px',
          marginRight: '8px',
        }}
      >
        <Gallery
          style={styles.gallery}
        />
      </Paper>
    </div>
  );
};

App.propTypes = {
  renderLocation: PropTypes.string.isRequired,
};

App.defaultProps = {
  renderLocation: 'server',
};

export default App;
