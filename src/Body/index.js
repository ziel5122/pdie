import React from 'react';
import { connect } from 'react-redux';

import Body from './body';

const mapStateToProps = ({ image: { imageLabels, imageOpen, imageUrl } }) => ({
  imageLabels,
  imageOpen,
  imageUrl,
});

export default connect(mapStateToProps)(Body);
