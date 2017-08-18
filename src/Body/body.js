import AddAPhoto from 'material-ui/svg-icons/image/add-a-photo';
import React from 'react';

import styles from './styles';

const Body = ({ imageOpen, imageUploadUrl }) => (
  <div style={styles.body(imageOpen)}>
    <label htmlFor="image-input">
      <img src={imageUploadUrl} style={styles.imageUpload} />
    </label>
  </div>
);

export default Body;
