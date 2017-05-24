const addImage = image => ({
  image,
  type: 'ADD_IMAGE',
});

const setImages = images => ({
  images,
  type: 'SET_IMAGES',
});

export { addImage, setImages };
