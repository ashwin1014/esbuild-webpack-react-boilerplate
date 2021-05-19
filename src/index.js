import React from 'react';
import { hydrate, render } from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './app/App';

const MOUNT_NODE = document.getElementById('app');
const APP_BOOTSTRAP = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

if (MOUNT_NODE.hasChildNodes()) {
  hydrate(APP_BOOTSTRAP, MOUNT_NODE);
} else {
  render(APP_BOOTSTRAP, MOUNT_NODE);
}

reportWebVitals(console.info);
