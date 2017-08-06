const header_ = {
  height: '24px',
};

const headerLeft_ = {
  marginBottom: '8px',
  marginRight: '8px',
  marginTop: '8px',
};

const styles = {
  github: {
    cursor: 'pointer',
    cursor: 'hand',
    height: '24px',
    marginBottom: '8px',
    marginLeft: '8px',
    marginTop: '8px',
  },
  header: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '40px',
    paddingLeft: '8px',
  },
  image: {
    color: 'darkgray',
    fontSize: '21px',
  },
  left: {
    whiteSpace: 'nowrap',
  },
  ngine: {
    color: 'gray',
    fontSize: '21px',
  },
  panafold: {
    ...headerLeft_,
    height: '24px',
    width: 'auto',
  },
  right: {
    paddingRight: '8px',
    textAlign: 'right',
  },
  title: {
    ...headerLeft_,
    display: 'inline-block',
    verticalAlign: 'top',
  },
};

export default styles;
