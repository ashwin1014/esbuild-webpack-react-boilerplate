import React from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import App from './base/App';

const MOUNT_NODE = document.getElementById('app');

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  MOUNT_NODE
);
