import { combineReducers } from 'redux';

const imageLabels = (state = [], action) => {
  switch (action.type) {
    case 'SET_IMAGE_LABELS':
      return action.imageLabels;

    default:
      return state;
  }
};

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

const imageUrl = (state = '', action) => {
  switch (action.type) {
    case 'SET_IMAGE_URL':
      return action.imageUrl;

    default:
      return state;
  }
};

export default combineReducers({
  imageLabels,
  imageOpen,
  imageUrl,
});
