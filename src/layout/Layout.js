import React from 'react';

import PropTypes from 'prop-types';

import '../styles/main.scss';

const Layout = ({ children }) => {
  return <main className='app-layout'>{children}</main>;
};

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
