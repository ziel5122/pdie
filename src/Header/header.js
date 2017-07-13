import React from 'react';

import styles from './styles';
import Center from './Center';
import Left from './Left/header-left';
import Right from './Right/header-right';

const Header = () => (
  <div style={styles.header}>
    <Left style={styles.headerLeft} />
    <Center style={styles.headerCenter} />
    <Right style={styles.headerRight} />
  </div>
);

export default Header;
