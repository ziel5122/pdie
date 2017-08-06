import React from 'react';
import { connect } from 'react-redux';

import HeaderActions from './header-actions';

const mapStateToProps = ({ headerActions: { imageOpen, ngineOpen} }) => ({
  imageOpen,
  ngineOpen,
});

const mapDispatchToProps = (dispatch) => ({
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
