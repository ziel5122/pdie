import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ContentClear from 'material-ui/svg-icons/content/clear';
import ImageAddToPhotos from 'material-ui/svg-icons/image/add-to-photos';
import TextField from 'material-ui/TextField';
import React from 'react';

import styles from './styles';
import Left from './Left';

const Header = ({ searchOpen, toggleSearch, uploadOpen }) => (
  <div style={styles.header}>
    <Left style={styles.headerLeft} />
    <div style={styles.headerCenter}>
      <div style={styles.actions}>
        <ImageAddToPhotos />
        <IconButton
          onTouchTap={() => {
            toggleSearch();
          }}
          >
          <ActionSearch />
        </IconButton>
        {searchOpen === true ? 'cat' : 'dog'}
        <ContentClear />
        <TextField
          id="search"
          style={{
            display: searchOpen ? 'inline-block' : 'none',
          }}
          />
      </div>
    </div>
    <div style={styles.headerRight}>
      <a style={styles.github} href="http://www.github.com/ziel5122/pdie">
        {`GitHub`}
      </a>
    </div>
  </div>
);

export default Header;
