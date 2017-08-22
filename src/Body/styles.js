const styles = {
  body(imageOpen) {
    return {
      background: 'darkgray',
      display: imageOpen ? 'block' : 'none',
      marginTop: '16px',
      padding: '16px',
      textAlign: 'center',
      verticalAlign: 'middle',
    };
  },
  imageUpload: {
    cursor: 'hand',
    cursor: 'pointer',
    display: 'inline-block',
    height: '480px',
    width: 'auto',
  },
};

export default styles;
