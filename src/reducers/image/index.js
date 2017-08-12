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

const imageUploadUrl = (state = '', action) => {
  switch (action.type) {
    case 'SET_IMAGE_UPLOAD':
      return action.imageUploadUrl;

    default:
      return state;
  }
};

export default combineReducers({
  imageOpen,
  imageUploadUrl,
});
