import React from 'react';
import { connect } from 'react-redux';

import Body from './body';

const mapStateToProps = ({ headerActions: { imageOpen } }) => {
  console.log(`mapStateToProps: ${imageOpen}`);

  return {
    imageOpen,
  };
};

export default connect(mapStateToProps)(Body);
