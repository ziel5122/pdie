import { combineReducers } from 'redux';

const ngineOpen = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_IMAGE':
      return false;

    case 'TOGGLE_NGINE':
      return !state;

    default:
      return state;
  }
};

const searchQuery = (state = '', { searchQuery, type }) => {
  switch (type) {
    case 'SET_SEARCH_QUERY':
      return searchQuery;

    default:
      return state;
  }
};

export default combineReducers({
  ngineOpen,
  searchQuery,
});
