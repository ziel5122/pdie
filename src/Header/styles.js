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
    flex: 2,
    textAlign: 'center',
  },
  headerLeft: {
    marginBottom: '8px',
    marginTop: '8px',
    verticalAlign: 'top',
    width: '150px',
  },
  headerRight: {
    ...header_,
    flex: 1,
    textAlign: 'right',
  },
};

export default styles;
