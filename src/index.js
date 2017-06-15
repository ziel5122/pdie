import React from 'react';
import { render } from 'react-dom';

import App from './App';

process.env.RENDER_LOCATION = 'client';
console.log(process.env.RENDER_LOCATION);

render(<h1>Hello</h1>, document.getElementById('root'));
