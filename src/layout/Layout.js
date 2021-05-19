import React, { useCallback } from 'react';

import PropTypes from 'prop-types';

import { isPrerendering } from '@utils/prerendererUtils';
import { Loader } from '@sharedComponents';

import '../styles/main.scss';

const Layout = ({ children }) => {
  const showOfflineNotification = useCallback(() => {
    // eslint-disable-next-line no-alert
    alert('You appear to be offline!');
  }, []);
  window.addEventListener('offline', () => showOfflineNotification());
  return <main className='app-layout'>{isPrerendering() ? <Loader /> : children}</main>;
};

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
