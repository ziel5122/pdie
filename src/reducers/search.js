const searchQuery = (state = '', { searchQuery, type }) => {
  switch (type) {
    case 'SET_SEARCH_QUERY':
      return searchQuery;

    default:
      return state;
  }
};

export default searchQuery;
