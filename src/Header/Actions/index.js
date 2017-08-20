import React from 'react';
import { connect } from 'react-redux';

import Actions from './actions';

const mapStateToProps = ({ image }) => ({
  imageOpen: image.imageOpen,
  imageUploadUrl: image.imageUploadUrl,
});

const mapDispatchToProps = (dispatch) => ({
  setImageUploadUrl(imageUploadUrl) {
    dispatch({
      imageUploadUrl,
      type: 'SET_IMAGE_UPLOAD_URL',
    });
  },

  toggleImage() {
    dispatch({
      type: 'TOGGLE_IMAGE',
    });
  },

  toggleNgine() {
    dispatch({
      type: 'TOGGLE_NGINE',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Actions);
