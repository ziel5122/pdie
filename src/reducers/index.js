import { combineReducers } from 'redux';

import image from './image';
import ngine from './ngine';

const renderLocation = (state = 'server', action) => {
  switch (action.type) {
    case 'SET_RENDER_LOCATION':
      return action.renderLocation;

    default:
      return state;
  }
};

export default combineReducers({
  image,
  ngine,
  renderLocation,
});
