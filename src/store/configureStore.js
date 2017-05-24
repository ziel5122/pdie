import { createStore } from 'redux';

// import { gcs, gcv } from '../gcp/test-vision';
import { setImages } from '../actions/image';
import setIndex from '../actions/search-actions';
import reducers from '../reducers';
import { getImages } from '../image/support/retriever';
import { setColor } from '../actions/color';

const maxHexColor = Math.pow(2, 24);
const secondsInDay = 60 * 60 * 24;

const getColor = () => {
  const date = new Date();
  const secondsOfDay = date.getHours() * 3600 + date.getMinutes() * 60 +
   date.getSeconds();
  const fractionOfDay = secondsOfDay / secondsInDay;
  const hexColor = fractionOfDay * maxHexColor;
  const blue = Math.floor(hexColor % 255);
  const green = Math.floor(hexColor / 255 % 255);
  const red = Math.floor((hexColor / 255 ^ 2) % 255);
  return {
    red,
    green,
    blue,
  };
};

const configureStore = () => {
  const store = createStore(reducers);

  store.dispatch(setColor(getColor()));
/*
  const bucket = gcs.bucket('pdie-image-storage.appspot.com');
  console.log(bucket);

  getImages((images) => {
    store.dispatch(setImages(images));
  });

  buildIndex('Images', (index) => {
    store.dispatch(setIndex(index));
  });
  */
  return store;
};

export default configureStore;
