const search = {
  backgroundColor: 'gray',
  color: 'white',
  display: 'inline-block',
  height: '5vh',
  margin: '0 auto',
};

const imageUpload = {
  backgroundColor: 'darkgray',
  color: 'white',
  display: 'inline-block',
  height: '5vh',
  margin: '0 auto',
};

const header = {
  backgroundColor: 'white',
  minHeight: '40px',
  display: 'flex',
  display: '-webkit-flex', /* Safari */
  alignItems: 'center',
  WebkitAlignItems: 'center', /* Safari 7.0+ */
};

const header_ = {
  flex: 1,
  height: '24px',
};

const headerCenter = {
  ...header_,
  textAlign: 'center',
};

const headerLeft = {
  ...header_,
  display: 'flex',
  alignItems: 'center',
  marginLeft: '8px',
  padding: 0,
  textAlign: 'left',
};

const headerRight = {
  ...header_,
  textAlign: 'right',
};

const imgPanafold = {
  display: 'inline-block',
  height: '24px',
};

const txt = {
  fontSize: '24px',
  display: 'inline-block',
  maxHeight: '24px',
};

const txtImage = {
  ...txt,
  color: 'darkgray',
  marginLeft: '8px',
};

const txtNgine = {
  ...txt,
  color: 'gray',
};

export default {
  header,
  headerCenter,
  headerLeft,
  headerRight,
  imgPanafold,
  txtImage,
  txtNgine,
};
