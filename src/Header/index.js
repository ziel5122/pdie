import React from 'react';
import { connect } from 'react-redux';

import Header from './header';

const mapStateToProps = ({ searchOpen, uploadOpen }) => ({
  searchOpen,
  uploadOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSearch: () => {
    dispatch({
      type: 'OPEN_SEARCH',
    });
  },
});
