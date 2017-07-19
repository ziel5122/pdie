import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ContentClear from 'material-ui/svg-icons/content/clear';
import ImageAddToPhotos from 'material-ui/svg-icons/image/add-to-photos';
import TextField from 'material-ui/TextField';
import React from 'react';

import styles from './styles';

const HeaderCenter = ({
  imageOpen,
  ngineOpen,
  style,
  toggleImage,
  toggleNgine
}) => (
  <div style={style}>
    <div style={styles.actions}>
      <div style={{
          ...styles.imageWrapper,
          background: imageOpen ? 'darkgray' : 'white',
          height: imageOpen ? '56px' : '40px',
      }}>
        <ImageAddToPhotos
          onTouchTap={() => {
            toggleImage();
          }}
          style={imageOpen ? {
            background: 'darkgray',
            color: 'white',
            cursor: 'pointer',
            cursor: 'hand',
            display: 'inline-block',
            marginTop: '8px',
          } : {
            background: 'white',
            color: 'darkgray',
            cursor: 'pointer',
            cursor: 'hand',
            display: 'inline-block',
            marginTop: '8px',
          }}
        />
      </div>
      <ActionSearch
        onTouchTap={() => {
          toggleNgine();
        }}
        style={{
          ...styles.actions,
          backgroundColor: 'red',
          cursor: 'pointer',
          cursor: 'hand',
        }}
      />
      <ContentClear />
      <TextField
        id="search"
        style={{
          display: ngineOpen ? 'inline-block' : 'none',
        }}
        />
    </div>
  </div>
);

export default HeaderCenter;
