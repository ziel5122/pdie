import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ImageAddToPhotos from 'material-ui/svg-icons/image/add-to-photos';
import TextField from 'material-ui/TextField';
import React from 'react';

import Search from '../Search';
import styles from './styles';

let imageBackground;
let imageColor;
let imageHeight;
let ngineBackground;
let ngineColor;

const HeaderCenter = ({
  imageOpen,
  ngineOpen,
  searchQuery,
  setSearchQuery,
  toggleImage,
  toggleNgine
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

  if (ngineOpen) {
    ngineBackground = 'gray';
    ngineColor = 'white';
  } else {
    ngineBackground = 'white';
    ngineColor = 'gray';
  }

  return (
    <div style={styles.headerActions}>
      <div style={{
          ...styles.imageWrapper,
          background: imageBackground,
          height: imageHeight,
      }}>
        <ImageAddToPhotos
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
