import { PREPEND_IMAGE, SET_IMAGES } from './types';

const prependImage = image => ({
  image,
  type: 'PREPEND_IMAGE',
});

const setImages = images => ({
  images,
  type: 'SET_IMAGES',
});

export { prependImage, setImages };
