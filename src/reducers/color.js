import { SET_THEME_COLOR } from '../actions/types';

const color = (state = {
  red: 255,
  green: 255,
  blue: 255,
}, action) => {
  switch (action.type) {
    case SET_THEME_COLOR:
      const { red, green, blue } = action.color;
      return {
        red,
        green,
        blue,
      };

    default:
      return state;
  }
}

export { color };
