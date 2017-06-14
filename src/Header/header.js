import PropTypes from 'prop-types';
import React from 'react';

import Center from './Center';
import Left from './Left';
import Right from './Right';

import styles from './styles';

const Header = () => (
  <div style={styles.header}>
    <Left style={styles.headerLeft} />
    <Center />
    <Right />
  </div>
);

export default Header;
