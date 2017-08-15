import React from 'react';
import { connect } from 'react-redux';

import Body from './body';

const mapStateToProps = ({ image: { imageOpen, imageUploadUrl } }) => ({
  imageOpen,
  imageUploadUrl,
});

const mapDispatchToProps = (dispatch) => ({
  setImageUploadUrl(imageUploadUrl) {
    dispatch({
      imageUploadUrl,
      type: 'SET_IMAGE_UPLOAD',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Body);
