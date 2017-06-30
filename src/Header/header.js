import React from 'react';

import styles from './styles';

const Header = () => (
  <div style={styles.header}>
    {`some header text`}
    <img
      alt="panafold"
      src="https://firebasestorage.googleapis.com/v0/b/pdie-image-storage.appspot.com/o/img%2Fpanafold.png?alt=media&token=1a7043c7-c4b3-498f-852c-71ee37341da4"
      style={styles.panafold}
    />
  </div>
);

export default Header;
