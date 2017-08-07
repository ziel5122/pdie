const actionButton_ = {
  cursor: 'pointer',
  cursor: 'hand',
  marginBottom: '8px',
  marginRight: '8px',
  marginTop: '8px',
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
    paddingLeft: '8px',
    textAlign: 'center',
  },
  ngineButton: {
    ...actionButton_,
    display: 'inline-block',
  },
  ngineWrapper: {
    display: 'inline-block',
    height: '40px',
    paddingLeft: '8px',
    verticalAlign: 'top',
  },
};

export default styles;
