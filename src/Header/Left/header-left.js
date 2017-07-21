import React from 'react';

import styles from './styles';

const HeaderLeft = ({ style }) => (
  <div style={style}>
    <a href="http://panafold.co">
      <img
        alt="panafold"
        src="https://firebasestorage.googleapis.com/v0/b/pdie-image-storage.appspot.com/o/img%2Fpanafold.png?alt=media&token=1a7043c7-c4b3-498f-852c-71ee37341da4"
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
