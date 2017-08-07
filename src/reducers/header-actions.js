const headerActions = (state = {
  imageOpen: false,
  ngineOpen: false,
}, action) => {
  switch (action.type) {
    case 'TOGGLE_NGINE':
      return state.ngineOpen ? {
        imageOpen: false,
        ngineOpen: false,
      } : {
        imageOpen: false,
        ngineOpen: true,
      };

    case 'TOGGLE_IMAGE':
      return state.imageOpen ? {
        imageOpen: false,
        ngineOpen: false,
      } : {
        imageOpen: true,
        ngineOpen: false,
      };

    default:
      return state;
  }
};

export default headerActions;
