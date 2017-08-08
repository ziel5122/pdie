import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import React from 'react';

import Body from '../Body';
import Gallery from '../Gallery/gallery';
import Header from '../Header/header';
import styles from './styles';

let clientColor;
let serverColor;
let zDepth;

const App = ({ renderLocation }) => {
  if (renderLocation === 'server') {
    clientColor = 'darkgray';
    serverColor = 'black';
    zDepth = 0;
  } else {
    clientColor = 'black';
    serverColor = 'darkgray';
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
      <Paper zDepth={zDepth} style={{background: 'red'}}>
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
