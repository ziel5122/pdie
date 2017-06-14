import ActionSearch from 'material-ui/svg-icons/action/search';
import ContentClear from 'material-ui/svg-icons/content/clear';
import TextField from 'material-ui/TextField';
import React from 'react';

const Search = ({ searchOpen, searchQuery, style }) => (
  <div style={style}>
      <TextField
        id="search"
        style={{
          display: 'none',
        }}
        value={searchQuery}
      />
      <ActionSearch style={style} />
      <ContentClear style={style} />
  </div>
);

export default Search;
