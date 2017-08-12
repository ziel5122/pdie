import AddAPhoto from 'material-ui/svg-icons/image/add-a-photo';
import React from 'react';

import styles from './styles';

const Body = ({ imageOpen, imageUploadUrl }) => (
  <div style={{
      ...styles.body,
      display: imageOpen ? 'block' : 'none',
    }}
  >
    <div style={{
        background: 'white',
        display: 'inline-block',
      }}
    >
      <img
        src={imageUploadUrl}
        style={{
          height: '48px',
          width: 'auto' ,
        }}
      />
    </div>
  </div>
);

export default Body;
