import ImageAddToPhotos from 'material-ui/svg-icons/image/add-to-photos';
import React from 'react';

import styles from './styles';

const Image = ({ imageOpen }) => (
  <ImageAddToPhotos
    style={imageOpen ? styles.notOpen : styles.open}
  />
);

export default Image;
