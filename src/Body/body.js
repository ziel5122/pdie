import AddAPhoto from 'material-ui/svg-icons/image/add-a-photo';
import React from 'react';

import styles from './styles';

const reader = new FileReader();

const Body = ({ imageOpen, imageUploadUrl, setImageUploadUrl }) => (
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
      <label htmlFor="image-input">
        <img
          src={imageUploadUrl}
          style={{
            height: '48px',
            width: 'auto' ,
          }}
        />
      </label>
    </div>
  </div>
);

export default Body;
