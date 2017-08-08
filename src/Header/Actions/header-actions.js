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
        <Photo
          onTouchTap={toggleImage}
          style={{
            ...styles.imageButton,
            color: imageColor,
          }}
        />
      </div>
      <Search />
    </div>
  );
};

export default HeaderCenter;
