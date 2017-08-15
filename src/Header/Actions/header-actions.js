import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import Photo from 'material-ui/svg-icons/image/photo';
import TextField from 'material-ui/TextField';
import React from 'react';

import Search from '../Search';
import styles from './styles';

const reader = new FileReader();

let imageBackground;
let imageColor;
let imageHeight;

const HeaderCenter = ({
  imageOpen,
  imageUploadUrl,
  setImageUploadUrl,
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

  reader.onloadend = () => {
    setImageUploadUrl(reader.result);
  };

  return (
    <div style={styles.headerActions}>
      <div style={{
          ...styles.imageWrapper,
          background: imageBackground,
          height: imageHeight,
      }}>
        {
          imageUploadUrl ? (
            <Photo
              onClick={() => toggleImage()}
              style={{
                ...styles.imageButton,
                color: imageColor,
              }}
            />
          ) : (
            <label htmlFor="image-input">
              <Photo
                onClick={() => toggleImage()}
                style={{
                  ...styles.imageButton,
                  color: imageColor,
                }}
              />
            </label>
          )
        }
        <input
          id="image-input"
          onChange={e => reader.readAsDataURL(e.target.files[0])}
          style={{ display: 'none' }}
          type="file"
        />
      </div>
      <Search />
    </div>
  );
};

export default HeaderCenter;
