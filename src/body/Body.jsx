import PropTypes from 'prop-types';
import React from 'react';
import Gallery from 'react-grid-gallery';
import { connect } from 'react-redux';

import UpperBody from './UpperBody';

import './Body.css';

const Body = ({ images }) => (
  <div className="body">
    <UpperBody />
    <Gallery
      images={images}
      enableImageSelection={false}
      backdropClosesModal
      enableKeyboardInput
    />
  </div>
);

Body.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    thumbnail: PropTypes.string,
    thumbnailWidth: PropTypes.number,
    thumbnailHeight: PropTypes.number,
  })).isRequired,
};

const BodyRedux = connect(
  state => ({ images: state.images }),
)(Body);

export default BodyRedux;