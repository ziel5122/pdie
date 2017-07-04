import ActionSearch from 'material-ui/svg-icons/action/search';
import ContentClear from 'material-ui/svg-icons/content/clear';
import ImageAddToPhotos from 'material-ui/svg-icons/image/add-to-photos';
import TextField from 'material-ui/TextField';
import React from 'react';

import styles from './styles';

const Header = () => (
  <div style={styles.header}>
    <div style={styles.headerLeft}>
      <a href="http://panafold.co">
        <img
          alt="panafold"
          onClick={() => {
            window.location.href = 'https://panafold.co/';
          }}
          src="https://firebasestorage.googleapis.com/v0/b/pdie-image-storage.appspot.com/o/img%2Fpanafold.png?alt=media&token=1a7043c7-c4b3-498f-852c-71ee37341da4"
          style={styles.panafold}
        />
      </a>
      <div style={styles.title}>
        <span style={styles.image}>image</span>
        <span style={styles.ngine}>ngine</span>
      </div>
    </div>
    <div style={styles.headerCenter}>
      <div style={styles.actions}>
        <ImageAddToPhotos />
        <ActionSearch />
        <ContentClear />
        <TextField />
      </div>
    </div>
    <div style={styles.headerRight}>
      <a style={styles.actions} href="http://www.github.com/ziel5122/pdie">
        {`GitHub`}
      </a>
    </div>
  </div>
);

export default Header;
