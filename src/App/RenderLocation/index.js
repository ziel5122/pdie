import React from 'react';
import { connect } from 'react-redux';

import RenderLocation from './render-location';

const mapStateToProps = ({ renderLocation }) => ({
  renderLocation,
});

export default connect(mapStateToProps)(RenderLocation);
