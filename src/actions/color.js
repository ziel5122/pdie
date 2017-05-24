import { SET_THEME_COLOR } from './types';

const setColor = (color) => ({
  color,
  type: SET_THEME_COLOR,
});

export { setColor };
