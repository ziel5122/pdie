import { combineReducers } from 'redux';

import headerActions from './header-actions';
import renderLocation from './render-location';

export default combineReducers({
  headerActions,
  renderLocation,
});
