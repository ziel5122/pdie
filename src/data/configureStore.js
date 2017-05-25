import { createStore } from 'redux';

import { setImages } from './actions/image-actions';
import setIndex from './actions/search-actions';
import imageStore from './store';
import { getImages } from '../image/support/retriever';
import buildIndex from '../search';

const configureStore = () => {
  const store = createStore(imageStore);

  getImages((images) => {
    store.dispatch(setImages(images));
  });

  buildIndex('Images', (index) => {
    store.dispatch(setIndex(index));
  });

  return store;
};

configureStore();

export default configureStore;
