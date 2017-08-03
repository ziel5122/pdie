import React from 'react';

import styles from './styles';

const Body = ({ imageOpen, style }) => (
  <div style={{
      ...style,
      display: imageOpen ? 'block' : 'none',
    }}
  >
    <div style={styles.upload}>
      <div style={styles.uploadedImage}>
        {`this is a body div`}
        <br />
        {`it's 640x480`}
        <br />
        {`${imageOpen}`}
        <br />
        {'more content'}
      </div>
    </div>
  </div>
);

export default Body;
