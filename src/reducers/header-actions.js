import { combineReducers } from 'redux';

const imageOpen = (state = false, action) => {
  switch (action.type) {
    case 'CLOSE_UPLOAD':
      return false;

    case 'OPEN_SEARCH':
      return false;

    case 'OPEN_UPLOAD':
      return true;

    default:
      return state;
  }
};

const ngineOpen = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SEARCH':
      return !state;

    case 'OPEN_UPLOAD':
      return false;

    default:
      return state;
  }
};

const headerActions = (state = {
  imageOpen: false,
  ngineOpen: false,
}, action) => {
  switch (action.type) {
    case 'TOGGLE_NGINE':
      console.log('triggered');
      if (!ngineOpen) {
        return {
          imageOpen: false,
          ngineOPen: true,
        };
      }
      return {
        imageOpen: false,
        ngineOpen: false,
      };

    case 'TOGGLE_IMAGE':
      console.log('triggered');
      if(!imageOpen) {
        return {
          imageOpen: true,
          ngineOpen: false,
        };
      }
      return {
        imageOpen: false,
        ngineOpen: false,
      }

    default:
      return state;
  }
};

export default headerActions;
