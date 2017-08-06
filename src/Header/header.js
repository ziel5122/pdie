import React from 'react';

import Actions from './Actions';
import github from '../../img/github32.png';
import panafold from '../../img/panafold.jpg';
import styles from './styles';

const Header = () => (
  <div style={styles.header}>
    <div style={styles.left}>
      <a href="http://panafold.co">
        <img
          alt="panafold"
          src={panafold}
          style={styles.panafold}
        />
      </a>
      <div style={styles.title}>
        <span style={styles.image}>{`image`}</span>
        <span style={styles.ngine}>{`ngine`}</span>
      </div>
    </div>
    <div style={{
        background: 'blue',
        width: '8px'
      }}
    />
    <Actions />
    <div style={styles.right}>
      <a style={styles.github} href="http://www.github.com/ziel5122/pdie">
        <img
          alt="github"
          src={github}
          style={styles.github}
        />
      </a>
    </div>
  </div>
);

export default Header;
