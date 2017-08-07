const searchQuery = (state = '', { searchQuery, type }) => {
  switch (type) {
    case 'SET_SEARCH_QUERY':
      console.log(searchQuery);
      return searchQuery;

    default:
      return state;
  }
};

export default searchQuery;
