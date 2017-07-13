import React from 'react';

import styles from './styles';
import Center from './Center';
import Left from './Left';

const Header = () => (
  <div style={styles.header}>
    <Left style={styles.headerLeft} />
    <Center style={styles.headerCenter} />
    <div style={styles.headerRight}>
      <a style={styles.github} href="http://www.github.com/ziel5122/pdie">
        {`GitHub`}
      </a>
    </div>
  </div>
);

export default Header;
