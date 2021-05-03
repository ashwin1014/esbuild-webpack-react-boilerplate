/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class MyErrorBoundary extends PureComponent {
  state = {
    error: null
  };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('ERROR', error);
    console.error('INFO', info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ minHeight: 'calc(100vh - 315px)' }} className='d-flex'>
          <div className='d-flex m-auto'>
            <p>
              OOPS! Something went wrong{' '}
              <span role='img' aria-label='Disappointed'>
                &#128542;
              </span>{' '}
              Please refresh the page or try again later
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

MyErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default withRouter(MyErrorBoundary);
