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
      <ImageAddToPhotos
        onTouchTap={() => {
          toggleImage();
        }}
      />
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
