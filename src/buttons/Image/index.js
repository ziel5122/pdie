import React from 'react';
import { connect } from 'react-redux';

import Image from './image';

const mapStateToProps = (state) => ({
  imageOpen: state.imageOpen,
});

export default connect(mapStateToProps)(Image);
