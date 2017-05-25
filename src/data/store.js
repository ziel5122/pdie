import { combineReducers } from 'redux';

import { image, images, previewImageUrl } from './reducers/image-store';
import { searchIndex, searchOpen, searchQuery } from './reducers/search-store';

const canUpload = (state = false, action) => {
  switch (action.type) {
    case 'SET_UPLOAD':
      return action.upload;

    default:
      return state;
  }
};

const previewLabel = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_DELETE':
      if (state.label !== action.label) {
        return state;
      }

      return {
        ...state,
        delete: !state.delete,
      };

    default:
      return state;
  }
};

const previewLabels = (state = [], action) => {
  switch (action.type) {
    case 'SET_PREVIEW_LABELS':
      return action.labels.map(label => ({
        label,
        delete: false,
      }));

    case 'TOGGLE_DELETE':
      return state.map(label => previewLabel(label, action));

    default:
      return state;
  }
};

export default combineReducers({
  canUpload,
  image,
  images,
  previewImageUrl,
  previewLabels,
  searchIndex,
  searchOpen,
  searchQuery,
});
