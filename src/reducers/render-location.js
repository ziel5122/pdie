const renderLocation = (state = 'server', action) => {
  switch (action.type) {
    case 'SET_RENDER_LOCATION':
      return action.renderLocation;

    default:
      return state;
  }
};

export default renderLocation;
