import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import React from 'react';

import getStyles from './styles';
import Header from '../Header/header';

const App = ({ renderLocation }) => {
  console.log(`App renderLocation: ${renderLocation}`);
  const styles = getStyles({renderLocation});

  return (
    <div>
      <p>
        <span>{'This HTML was rendered on the '}</span>
        <span style={styles.server} id="server">{'server '}</span>
        <span style={styles.client} id="client">{'client.'}</span>
      </p>
      <Paper>
        <Header />
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
