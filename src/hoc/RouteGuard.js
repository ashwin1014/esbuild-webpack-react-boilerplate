/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-confusing-arrow */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authenticated === true ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
