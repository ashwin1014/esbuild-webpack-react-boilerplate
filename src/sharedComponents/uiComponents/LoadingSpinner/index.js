// eslint-disable-next-line import/no-extraneous-dependencies
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Loader.style.scss';

const Loader = ({ message = '', className = '', white = false }) => {
  return (
    <div className={cx('loading-container', { [`${className}`]: className, white })}>
      <div className='loader'>
        <div />
        <div />
        <div />
      </div>
      {message && <p className='loader_message'>{message}</p>}
    </div>
  );
};

Loader.propTypes = {
  message: PropTypes.string,
  className: PropTypes.string,
  white: PropTypes.bool
};

export default memo(Loader);
