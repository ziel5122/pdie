const header_ = {
  flex: 1,
  marginBottom: '8px',
  marginTop: '8px',
  verticalAlign: 'top',
};

const headerRight_ = {
  marginRight: '8px',
};

const styles = {
  header: {
    display: 'flex',
    height: '40px',
  },
  github: {
    ...headerRight_,
    fontSize: '21px',
  },
  headerCenter: {
    ...header_,
    textAlign: 'center',
  },
  headerLeft: {
    flex: 1,
    marginBottom: '8px',
    marginTop: '8px',
    verticalAlign: 'top',
  },
  headerRight: {
    ...header_,
    textAlign: 'right',
  },
};

export default styles;
