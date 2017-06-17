const styles = ({ renderLocation }) => ({
  client: {
    color: renderLocation === 'server' ? 'darkgray' : 'black',
  },
  server: {
    color: renderLocation === 'server' ? 'black' : 'darkgray',
  },
});

export default styles;
