import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

import Main from './main';
import reducers from './reducers';

const store = createStore(reducers, window.__PRELOADED_STATE);
delete window.__PRELOADED_STATE;

const vision = () => {
  const { imageUploadUrl } = store.getState().image;

  console.log('triggered');
  console.log(imageUploadUrl.substr(0, 50));  
};

store.subscribe(vision);

render(
  <Main store={store} />,
  document.getElementById('root')
);

store.dispatch({
  renderLocation: 'client',
  type: 'SET_RENDER_LOCATION',
});
