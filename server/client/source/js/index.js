import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';

import App from 'views/App';

// Load SCSS
import '../scss/index.scss';

// Render it to DOM
ReactDOM.render(<App />, document.getElementById('root'));
