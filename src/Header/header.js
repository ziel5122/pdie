import PropTypes from 'prop-types';
import React from 'react';

import githubLogo from '../../img/GitHub-Mark-32px.png';
import Center from './Center';
import Left from './Left';
import Right from './Right';

import styles from './styles';

const Header = ({ actions, icons: { left, right }, text }) => (
  <div style={styles.header}>
    <Left
      icon={left}
      style={styles.headerLeft}
      text={text}
    />
    {actions()}
    <Right
      icon={right}
      style={styles.headerRight}
    />
  </div>
);

export default Header;
