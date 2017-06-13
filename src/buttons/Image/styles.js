const image = {
  width: 'auto',
};

const notOpen = {
  ...image,
  backgroundColor: 'white',
  color: 'darkgray',
  height: '24px',
};

const open = {
  ...image,
  backgroundColor: 'darkgray',
  color: 'white',
  height: '36px',
};

export default {
  notOpen,
  open,
};
