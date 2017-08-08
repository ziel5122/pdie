import React from 'react';
import { connect } from 'react-redux';

import Body from './body';

const mapStateToProps = ({ image }) => ({
  imageOpen: image.imageOpen,
});

export default connect(mapStateToProps)(Body);
