import React from 'react';
import { connect } from 'react-redux';

import ImageInput from './image-input';

const mapDispatchToProps = (dispatch) => ({
  setImageUploadUrl(imageUploadUrl) {
    dispatch({
      imageUploadUrl,
      type: 'SET_IMAGE_UPLOAD_URL',
    });
  },
});

export default connect(undefined, mapDispatchToProps)(ImageInput);
