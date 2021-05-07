import React from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import App from './app/App';

const MOUNT_NODE = document.getElementById('app');

ReactDom.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  MOUNT_NODE
);
