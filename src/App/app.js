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

  return (
    <div style={{background: 'lightblue'}}>
      <p>
        <span>{'This HTML was rendered on the '}</span>
        <span style={styles.server} id="server">{'server '}</span>
        <span style={styles.client} id="client">{'client.'}</span>
      </p>
      <Paper zDepth={0}>
        <Header />
      </Paper>
      <Paper>
        <Body
          style={{
            ...styles.body,
          }}
        />
      </Paper>
      <Gallery
        style={styles.gallery}
      />
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
