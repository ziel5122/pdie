export default (state = 1, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log('inc');
      return state + 1

    case 'DECREMENT':
      console.log('dec');
      return state - 1

    default:
      return state
  }
}
