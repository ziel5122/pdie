const searchOpen = (state = true, action) => {
  switch (action.type) {
    case 'SET_SEARCH_OPEN':
      return action.open;

    default:
      return state;
  }
};

const searchQuery = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_SEARCH_QUERY':
      return '';

    case 'SET_SEARCH_QUERY':
      return action.query;

    default:
      return state;
  }
};

export { searchOpen, searchQuery };
