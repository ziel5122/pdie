import PropTypes from 'prop-types';
import React from 'react';

import githubLogo from '../../img/GitHub-Mark-32px.png';
import Center from './Center';
import Left from './Left';
import Right from './Right';

import styles from './styles';

const Header = ({ leftLogo, rightLogo, text }) => {
  return (
    <div style={styles.header}>
      <Left
        logo={leftLogo}
        style={styles.headerLeft}
        text={text}
      />
      <Center style={styles.headerCenter} />
      <Right
        logo={rightLogo}
        style={styles.headerRight}
      />
    </div>
  );
};

export default Header;
