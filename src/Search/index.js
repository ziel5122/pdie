import { connect } from 'react-redux';

import Search from './_search';

const mapStateToProps = (state) => ({
  searchOpen: state.searchOpen,
  searchQuery: state.searchQuery,
});

export default connect(mapStateToProps)(Search);
