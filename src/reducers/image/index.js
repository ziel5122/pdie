import { combineReducers } from 'redux';

const imageOpen = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_IMAGE':
      return !state;

    case 'TOGGLE_NGINE':
      return false;

    default:
      return state;
  }
};

const imageUpload = (state = '', action) => {
  switch (action.type) {
    case 'SET_IMAGE_UPLOAD':
      return action.url;

    default:
      return state;
  }
};

export default combineReducers({
  imageOpen,
  imageUpload,
});
