import ActionSearch from 'material-ui/svg-icons/action/search';
import ContentClear from 'material-ui/svg-icons/content/clear';
import TextField from 'material-ui/TextField';
import React from 'react';

import styles from './styles';

let ngineButtonColor;
let ngineWrapperBackground;
let searchDisplay;

const Search = ({
  ngineOpen,
  searchQuery,
  setSearchQuery,
  toggleNgine,
}) => {
  if (ngineOpen) {
    ngineButtonColor = 'white';
    ngineWrapperBackground = 'gray';
    searchDisplay = 'inline-block';
  } else {
    ngineButtonColor = 'gray';
    ngineWrapperBackground = 'white';
    searchDisplay = 'none';
  }

  return (
    <div style={{
        ...styles.ngineWrapper,
        background: ngineWrapperBackground,
      }}>
      <TextField
        id="search"
        inputStyle={styles.searchInput}
        onChange={({ target: { value } }) => setSearchQuery(value)}
        style={{
          ...styles.search,
          display: searchDisplay,
        }}
        underlineFocusStyle={{ borderColor: 'orange' }}
        value={searchQuery}
      />
      <ActionSearch
        onTouchTap={() => {
          if (!searchQuery) toggleNgine()
        }}
        style={{
          ...styles.ngineButton,
          color: ngineButtonColor,
        }}
      />
      <ContentClear
        onTouchTap={() => setSearchQuery('')}
        style={{
          ...styles.ngineButton,
          color: ngineButtonColor,
          display: searchQuery === '' ? 'none' : 'inline-block',
        }}
      />
    </div>
  );
};

export default Search;
