import { combineReducers } from 'redux';

const searchOpen = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SEARCH':
      return !state;

    case 'OPEN_UPLOAD':
      return false;

    default:
      return state;
  }
};

const uploadOpen = (state = false, action) => {
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

export {
  searchOpen,
  uploadOpen,
};
