const server = 'server';

const styles = ({ renderLocation }) => {
  console.log('styles renderLocation ' + renderLocation);
  const clientColor = renderLocation === server ? 'darkgray' : 'black';
  const serverColor = renderLocation === server ? 'black' : 'darkgray';

  return {
    client: {
      color: clientColor,
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
