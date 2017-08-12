import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import Photo from 'material-ui/svg-icons/image/photo';
import TextField from 'material-ui/TextField';
import React from 'react';

import Search from '../Search';
import styles from './styles';

let imageBackground;
let imageColor;
let imageHeight;

let reader;

const uploadImage = (e) => {
  reader = new FileReader();
  const file = e.target.files[0];

  reader.onloadend(() => console.log(reader.result));

  reader.readAsDataUrl(file);
};

const HeaderCenter = ({
  imageOpen,
  toggleImage,
}) => {
  if (imageOpen) {
    imageBackground = 'darkgray';
    imageColor = 'white',
    imageHeight = '56px';
  } else {
    imageBackground = 'white';
    imageColor = 'darkgray',
    imageHeight = '40px';
  }

  return (
    <div style={styles.headerActions}>
      <div style={{
          ...styles.imageWrapper,
          background: imageBackground,
          height: imageHeight,
      }}>
        <label htmlFor="image-input">
          <Photo
            style={{
              ...styles.imageButton,
              color: imageColor,
            }}
          />
        </label>
        <input
          id="image-input"
          onChange={(e) => {
            if (!imageOpen) {
              uploadImage(e);
              toggleImage();
            }
            else toggleImage();
          }}
          style={{ display: 'none' }}
          type="file"
        />
      </div>
      <Search />
    </div>
  );
};

export default HeaderCenter;
