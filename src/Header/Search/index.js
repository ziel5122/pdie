import React from 'react';
import { connect } from 'react-redux';

import HeaderSearch from './header-search';

const mapStateToProps = ({ ngine }) => ({
  ngineOpen: ngine.ngineOpen,
  searchQuery: ngine.searchQuery,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchQuery(searchQuery) {
    dispatch({
      searchQuery,
      type: 'SET_SEARCH_QUERY',
    });
  },

  toggleNgine() {
    dispatch({
      type: 'TOGGLE_NGINE',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearch);
