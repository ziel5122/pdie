import { combineReducers } from 'redux';

import { searchOpen, uploadOpen } from './header-actions';
import renderLocation from './render-location';

export default combineReducers({
  renderLocation,
  searchOpen,
  uploadOpen,
});
