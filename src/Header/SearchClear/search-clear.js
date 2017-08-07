import ContentClear from 'material-ui/svg-icons/content/clear';
import React from 'react';

import styles from './styles';

const SearchClear = ({ ngineColor, searchQuery, setSearchQuery }) => (
  <ContentClear
    onClick={() => setSearchQuery('')}
    style={{
      ...styles.ngineButton,
      color: ngineColor,
      display: searchQuery === '' ? 'none' : 'inline-block',
    }}
  />
);

export default SearchClear;
