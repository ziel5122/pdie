import React from 'react';
import { connect } from 'react-redux';

import App from './app';

const mapStateToProps = ({ renderLocation }) => ({
  renderLocation,
});

export default connect(mapStateToProps)(App);
