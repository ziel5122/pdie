import React from 'react';

import styles from './styles';

//const panafold = require('../../../img/panafold.png');

const HeaderLeft = ({ style }) => (
  <div style={style}>
    <a href="http://panafold.co">
      <img
        alt="panafold"
        style={styles.panafold}
      />
    </a>
    <div style={styles.title}>
      <span style={styles.image}>{`image`}</span>
      <span style={styles.ngine}>{`ngine`}</span>
    </div>
  </div>
);

export default HeaderLeft;
