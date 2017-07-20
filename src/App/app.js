import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import React from 'react';

import getStyles from './styles';
import Body from '../Body';
import Gallery from '../Gallery/gallery';
import Header from '../Header/header';

const App = ({ renderLocation }) => {
  console.log(`App renderLocation: ${renderLocation}`);
  const styles = getStyles({renderLocation});
  const zDepth = renderLocation === 'client' ? 1 : 0;

  return (
    <div style={{background: 'lightblue'}}>
      <div>
        <span>{'This HTML was rendered on the '}</span>
        <span style={styles.server} id="server">{'server '}</span>
        <span style={styles.client} id="client">{'client.'}</span>
      </div>
      <Paper zDepth={zDepth} style={{margin: '8px',}}>
        <Header />
      </Paper>
      <Paper zDepth={zDepth}>
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
