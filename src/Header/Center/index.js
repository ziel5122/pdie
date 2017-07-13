import React from 'react';
import { connect } from 'react-redux';

import HeaderCenter from './header-center';

const mapStateToProps = ({ searchOpen, uploadOpen }) => ({
  searchOpen,
  uploadOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSearch() {
    dispatch({
      type: 'TOGGLE_SEARCH',
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderCenter);
