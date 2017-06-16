import React from 'react';
import { render } from 'react-dom';

import App from './App';

process.env.RENDER_LOCATION = 'client';

render(<App />, document.getElementById('root'));
