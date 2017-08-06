const actionButton_ = {
  cursor: 'pointer',
  cursor: 'hand',
  margin: '8px',
};

const actionWrapper_ = {
  textAlign: 'center',
};

const styles = {
  headerActions: {
    display: 'flex',
    flex: 2,
    paddingLeft: '8px',
    textAlign: 'left',
  },
  imageButton: {
    ...actionButton_,
    display: 'inline-block',
  },
  imageWrapper: {
    display: 'inline-block',
    textAlign: 'center',
  },
  ngineButton: {
    ...actionButton_,
    display: 'inline-block',
  },
  ngineWrapper: {
    display: 'inline-block',
    height: '40px',
    verticalAlign: 'top',
  },
};

export default styles;
