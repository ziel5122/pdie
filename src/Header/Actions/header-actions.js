import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ContentClear from 'material-ui/svg-icons/content/clear';
import ImageAddToPhotos from 'material-ui/svg-icons/image/add-to-photos';
import TextField from 'material-ui/TextField';
import React from 'react';

import styles from './styles';

let imageBackground;
let imageColor;
let imageHeight;
let ngineBackground;
let ngineColor;

const HeaderCenter = ({
  imageOpen,
  ngineOpen,
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
      <div style={{
          ...styles.ngineWrapper,
          background: ngineBackground,
        }}>
        <TextField
          id="search"
          inputStyle={{
            fontSize: '21px',
            height: '24px',
            margin: 0,
            verticalAlign: 'middle',
          }}
          style={{
            display: ngineOpen ? 'inline-block' : 'none',
            height: '36px',
            margin: 0,
            marginLeft: '8px',
            marginRight: '8px',
            verticalAlign: 'middle',
          }}
        />
        <ActionSearch
          onTouchTap={toggleNgine}
          style={{
            ...styles.ngineButton,
            color: ngineColor,
          }}
        />
        <ContentClear
          style={{
            ...styles.ngineButton,
            color: ngineColor,
          }}
        />
      </div>
    </div>
  );
};

export default HeaderCenter;
