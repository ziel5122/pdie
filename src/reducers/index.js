import { combineReducers } from 'redux';

import headerActions from './header-actions';
import renderLocation from './render-location';
import searchQuery from './search';

export default combineReducers({
  headerActions,
  renderLocation,
  searchQuery,
});
