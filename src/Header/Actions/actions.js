import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import Photo from 'material-ui/svg-icons/image/photo';
import TextField from 'material-ui/TextField';
import React from 'react';

import Search from '../Search';
import styles from './styles';

let imageButtonColor;
let imageWrapperStyles;

const Actions = ({
  imageOpen,
  imageUploadUrl,
  setImageUploadUrl,
  toggleImage,
}) => {
  if (imageOpen) {
    imageWrapperStyles = {
      background: 'darkgray',
      height: '56px',
    };
    imageButtonColor = 'white';
  } else {
    imageWrapperStyles = {
      background: 'white',
      height: '40px',
    };
    imageButtonColor = 'darkgray';
  }

  const ImageButton = () => (
    <Photo
      onClick={() => toggleImage()}
      style={{
        ...styles.imageButton,
        color: imageButtonColor,
      }}
    />
  );

  return (
    <div style={styles.actions}>
      <div style={{
          ...styles.imageWrapper,
          ...imageWrapperStyles,
        }}
      >
      {
        imageUploadUrl ? <ImageButton /> : (
          <label htmlFor="image-input">
            <ImageButton />
          </label>
        )
      }
      </div>
      <Search />
    </div>
  );
};

export default Actions;
