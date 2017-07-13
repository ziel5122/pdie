import React from 'react';

import styles from './styles';

const HeaderRight = ({ style }) => (
  <div style={style}>
    <a style={styles.github} href="http://www.github.com/ziel5122/pdie">
      {`GitHub`}
    </a>
  </div>
);

export default HeaderRight;
