import PropTypes from 'prop-types';
import React from 'react';

import githubLogo from '../../img/GitHub-Mark-32px.png';
import HeaderCenter from './header-center';
import HeaderLeft from './header-left';
import HeaderRight from './header-right';

import styles from './styles';

const Header = ({ logo }) => {
  return (
    <div style={styles.header}>
      <HeaderLeft style={styles.headerLeft} />
      <HeaderCenter style={styles.headerCenter} />
      <div style={styles.headerRight}>
        {'HeaderRight'}
      </div>
    </div>
  );
};

Header.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Header;
