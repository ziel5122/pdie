import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { addImage } from '../data/actions/image-actions';
import { store, upload } from '../image/support/core';

import './UploadButton.css';

const UploadButton = ({ canUpload, dispatch, image, file, previewLabels }) => (
  <FlatButton
    style={{ display: canUpload ? 'inline' : 'none',
      backgroundColor: '#4d4d4d',
      color: 'white',
    }}
    onTouchTap={() => {
      const { name, width, height } = image;
      upload(file)
      .then(() => (previewLabels.filter(Label => !Label.delete)))
      .then((chosenLabels) => {
        store(name, chosenLabels, width, height)
        .catch(err => console.error(err));
      });
      const src = `https://s3-us-west-2.amazonaws.com/testing-uswest2/${name}`;
      dispatch(addImage({
        src,
        width,
        height,
        thumbnail: src,
        thumbnailWidth: width,
        thumbnailHeight: height,
      }));
    }}
  >
    UPLOAD
  </FlatButton>
);

UploadButton.propTypes = {
  canUpload: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  image: PropTypes.shape({
    name: PropTypes.string,
    size: PropTypes.number,
    type: PropTypes.string,
  }).isRequired,
  file: PropTypes.instanceOf('File').isRequired,
  previewLabels: PropTypes.arrayOf(PropTypes.shape({
    Name: PropTypes.string,
    Confidence: PropTypes.number,
  })).isRequired,
};

const UploadButtonRedux = connect(
  state => ({
    canUpload: state.canUpload,
    image: state.image,
    previewLabels: state.previewLabels,
  }),
)(UploadButton);

export default UploadButtonRedux;
