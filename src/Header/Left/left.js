import React from 'react';

import panafoldIcon from '../../../img/panafold.png';

import styles from './styles';

const Left = ({ style }) => (
  <div style={style}>
    <img
      alt="panafold"
      onClick={() => {
        window.location = 'https://panafold.co/';
      }}
      src={panafoldIcon}
      style={styles.logo}
    />
    <span style={styles.textImage}>image</span>
    <span style={styles.textNgine}>ngine</span>
  </div>
);

export default Left;
