const prependImage = image => ({
  image,
  type: 'PREPEND_IMAGE',
});

const setImages = images => ({
  images,
  type: 'SET_IMAGES',
});

export { prependImage, setImages };
