const header_ = {
  height: '24px',
  marginBottom: '8px',
  marginTop: '8px',
  verticalAlign: 'top',
};

const headerRight_ = {
  marginRight: '8px',
};

const styles = {
  github: {
    ...headerRight_,
    fontSize: '21px',
  },
  headerCenter: {
    flex: 1,
    textAlign: 'center',
  },
  headerLeft: {
    whiteSpace: 'nowrap',
  },
  headerRight: {
    ...header_,
    textAlign: 'right',
  },
};

export default styles;
