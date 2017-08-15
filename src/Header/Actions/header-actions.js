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

const uploadImage = (e, setImage) => {
  reader = new FileReader();
  const file = e.target.files[0];

  reader.onloadend = () => {
    setImage(reader.result);
  };

  reader.readAsDataURL(file);
};

const HeaderCenter = ({
  imageOpen,
  imageUploadUrl,
  setImageUpload,
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

  console.log(imageUploadUrl);

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
          onChange={e => uploadImage(e, setImageUpload)}
          style={{ display: 'none' }}
          type="file"
        />
      </div>
      <Search />
    </div>
  );
};

export default HeaderCenter;
