import {
  APPEND_IMAGE,
  PREPEND_IMAGE,
  SET_IMAGE_FILE_NAME,
  SET_IMAGE_HEIGHT,
  SET_IMAGE_WIDTH,
  SET_IMAGES,
  SET_PREVIEW_IMAGE_URL,
} from '../actions/types';

const image = (state = {
  name: '',
  width: 0,
  height: 0,
}, action) => {
  switch (action.type) {
    case SET_IMAGE_FILE_NAME: {
      return {
        ...state,
        name: action.name,
      };
    }

    case SET_IMAGE_HEIGHT: {
      return {
        ...state,
        height: action.height,
      };
    }

    case SET_IMAGE_WIDTH: {
      return {
        ...state,
        width: action.width,
      };
    }

    default:
      return state;
  }
};

const images = (state = [], action) => {
  switch (action.type) {
    case APPEND_IMAGE:
      return [...state, action.image];

    case PREPEND_IMAGE:
      return [action.image, ...state];

    case SET_IMAGES:
      return action.images;

    default:
      return state;
  }
};

const previewImageUrl = (state = '', action) => {
  switch (action.type) {
    case SET_PREVIEW_IMAGE_URL:
      return action.url;

    default:
      return state;
  }
};

export { image, images, previewImageUrl };
