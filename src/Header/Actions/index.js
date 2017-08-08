import React from 'react';
import { connect } from 'react-redux';

import HeaderActions from './header-actions';

const mapStateToProps = ({ headerActions }) => ({
  imageOpen: headerActions.imageOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleImage() {
    dispatch({
      type: 'TOGGLE_IMAGE',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderActions);
