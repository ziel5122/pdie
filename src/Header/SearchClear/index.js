import React from 'react';
import { connect } from 'react-redux';

import SearchClear from './search-clear';

const mapStateToProps = ({ searchQuery }) => ({
  searchQuery,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchQuery(searchQuery) {
    dispatch({
      searchQuery,
      type: 'SET_SEARCH_QUERY',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchClear);
