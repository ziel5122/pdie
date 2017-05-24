import { createStore } from 'redux';

import { setImages } from './actions/image-actions';
import imageStore from './store';
import { getImages } from '../image/support/retriever';

const configureStore = () => {
  const store = createStore(imageStore);

  getImages((images) => {
    store.dispatch(setImages(images));
  });

  return store;
};

export default configureStore;
