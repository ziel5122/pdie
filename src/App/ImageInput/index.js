import React from 'react';
import { connect } from 'react-redux';

import ImageInput from './image-input';

const mapDispatchToProps = (dispatch) => ({
  setImageLabels(imageLabels) {
    dispatch({
      imageLabels,
      type: 'SET_IMAGE_LABELS',
    });
  },

  setImageUrl(imageUrl) {
    dispatch({
      imageUrl,
      type: 'SET_IMAGE_URL',
    });
  },
});

export default connect(undefined, mapDispatchToProps)(ImageInput);
