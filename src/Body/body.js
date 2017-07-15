import React from 'react';

import styles from './styles';

const Body = ({ style }) => (
  <div style={style} >
    <div style={styles.upload}>
      <div style={styles.uploadedImage}>
        {`this is a body div`}
        <br />
        {`it's 640x480`}
      </div>
    </div>
  </div>
);

export default Body;
