import React from 'react';

import logo from '../../img/panafold.png';

import styles from './styles';

const HeaderLeft = ({ style }) => (
  <div style={style}>
    <img src={logo} style={styles.imgPanafold} alt="logo" />
    <span style={styles.txtImage}>image</span>
    <span style={styles.txtNgine}>ngine</span>
  </div>
);

export default HeaderLeft;
