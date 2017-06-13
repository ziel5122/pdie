import React from 'react';

import githubLogo from '../../../img/GitHub-Mark-32px.png';

const Right = ({ style }) => (
  <div style={style} >
    <img src={githubLogo} style={{
        height: '24px',
        marginRight: '8px',
        width: 'auto',
      }}
    />
  </div>
);

export default Right;
