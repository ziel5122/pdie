import React from 'react';

import styles from './styles';

const Left = ({ logo, style, text }) => (
  <div style={style}>
    <img src={logo} style={styles.logo} alt="logo" />
    {text()}
  </div>
);

export default Left;
