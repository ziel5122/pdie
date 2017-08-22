import AddAPhoto from 'material-ui/svg-icons/image/add-a-photo';
import React from 'react';

import styles from './styles';



const Body = ({ imageLabels, imageOpen, imageUrl }) => (
  <div style={styles.body(imageOpen)}>
    <label htmlFor="image-input">
      <img src={imageUrl} style={styles.imageUpload} />
      <div style={{ display: 'inline-block' }}>
        {imageLabels.map(({ description, score }) => (`${description}: ${score}
          `))}
      </div>
    </label>
  </div>
);

export default Body;
