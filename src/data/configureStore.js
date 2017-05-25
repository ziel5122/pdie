import { createStore } from 'redux';

import { setImages } from './actions/image-actions';
// import setIndex from './actions/search-actions';
import reduxStore from './store';
import { getImages } from '../image/support/retriever';
// import buildIndex from '../search';

const configureStore = () => {
  const store = createStore(reduxStore);

  getImages((images) => {
    store.dispatch(setImages(images));
  });
  /*
  buildIndex('Images', (index) => {
    console.log(index);
    // store.dispatch(setIndex(index));
  });
  */
  return store;
};

export default configureStore;
