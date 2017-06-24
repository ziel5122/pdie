import PropTypes from 'prop-types';
import React from 'react';

import getStyles from './styles'

let count = 1;

const App = ({ renderLocation }) => {
  console.log(`App renderLocation: ${renderLocation}`);
  const styles = getStyles({renderLocation});

  return (
    <div>
      <h1>App Page</h1>
      <h2>This is the main page</h2>
      <p>
        <span>{'This HTML was rendered on the '}</span>
        <span style={styles.server} id="server">{'server '}</span>
        <span style={styles.client} id="client">{'client.'}</span>
      </p>
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
