import React from 'react';

import styles from './styles';

const Left = ({ icon, style, text }) => (
  <div style={style}>
    <img src={icon} style={styles.logo} alt="logo" />
    {text()}
  </div>
);

export default Left;
