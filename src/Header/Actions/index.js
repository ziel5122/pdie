import React from 'react';
import { connect } from 'react-redux';

import HeaderActions from './header-actions';

const mapStateToProps = ({
  headerActions: {
    imageOpen,
    ngineOpen
  },
  searchQuery,
}) => ({
  imageOpen,
  ngineOpen,
  searchQuery,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchQuery(searchQuery) {
    dispatch({
      searchQuery,
      type: 'SET_SEARCH_QUERY',
    });
  },

  toggleImage() {
    dispatch({
      type: 'TOGGLE_IMAGE',
    });
  },

  toggleNgine() {
    dispatch({
      type: 'TOGGLE_NGINE',
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderActions);
