import React, { memo } from 'react';

import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const Head = ({ children }) => {
  return <Helmet>{children}</Helmet>;
};

Head.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default memo(Head);
