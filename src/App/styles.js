const server = 'server';

const styles = ({ renderLocation }) => {
  console.log('styles renderLocation ' + renderLocation);
  const clientColor = renderLocation === server ? 'darkgray' : 'black';
  const serverColor = renderLocation === server ? 'black' : 'darkgray';

  return {
    body: {
      marginTop: '16px',
      textAlign: 'center',
      verticalAlign: 'middle',
    },
    client: {
      color: clientColor,
    },
    gallery: {
      marginTop: '24px',
      marginLeft: '0px',
      padding: '0px',
    },
    server: {
      color: serverColor,
    },
  };
}

styles.defaultProps = {
  renderLocation: 'server',
};

export default styles;
