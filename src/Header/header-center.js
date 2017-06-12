import ActionSearch from 'material-ui/svg-icons/action/search';
import ContentClear from 'material-ui/svg-icons/content/clear';
import ImageAddToPhotos from 'material-ui/svg-icons/image/add-to-photos';
import TextField from 'material-ui/TextField';
import React from 'react';

import ImageUpload from '../ImageUpload';
import Search from '../Search';

import styles from './styles';

const HeaderCenter = ({ style }) => (
    <div style={style}>
      <ImageAddToPhotos style={{
          color: 'darkgray',
          height: '24px',
          width: 'auto',
        }}
      />
      <TextField
        id="search"
        style={{
          display: 'none',
        }}
        value={'searchQuery'}
      />
      <ActionSearch style={{
          color: 'gray',
          height: '24px',
          marginLeft: '8px',
          width: 'auto',
        }}
      />
      <ContentClear style={{
          color: 'gray',
          display: 'none',
          height: '36px',
          marginLeft: '-4px',
          width: 'auto',
        }}
      />
    </div>
);

export default HeaderCenter;
