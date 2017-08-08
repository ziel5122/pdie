import ActionSearch from 'material-ui/svg-icons/action/search';
import ContentClear from 'material-ui/svg-icons/content/clear';
import TextField from 'material-ui/TextField';
import React from 'react';

import styles from './styles';

let ngineBackground;
let ngineColor;

const HeaderSearch = ({
  ngineOpen,
  searchQuery,
  setSearchQuery,
  toggleNgine,
}) => {
  if (ngineOpen) {
    ngineBackground = 'gray';
    ngineColor = 'white';
  } else {
    ngineBackground = 'white';
    ngineColor = 'gray';
  }

  return (
    <div style={{
        ...styles.ngineWrapper,
        background: ngineBackground,
      }}>
      <TextField
        id="search"
        inputStyle={{
          color: 'white',
          fontSize: '21px',
          height: '24px',
          verticalAlign: 'top',
        }}
        onChange={({ target: { value } }) => setSearchQuery(value)}
        style={{
          display: ngineOpen ? 'inline-block' : 'none',
          height: '34px',
          marginRight: '8px',
          marginTop: '8px',
          verticalAlign: 'top',
        }}
        underlineFocusStyle={{
          borderColor: 'orange',
        }}
        value={searchQuery}
      />
      <ActionSearch
        onTouchTap={() => {
          if (!searchQuery) toggleNgine()
        }}
        style={{
          ...styles.ngineButton,
          color: ngineColor,
        }}
      />
      <ContentClear
        onTouchTap={() => setSearchQuery('')}
        style={{
          ...styles.ngineButton,
          color: ngineColor,
          display: searchQuery === '' ? 'none' : 'inline-block',
        }}
      />
    </div>
  );
};

export default HeaderSearch;
