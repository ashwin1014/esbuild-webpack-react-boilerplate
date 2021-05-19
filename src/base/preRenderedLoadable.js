/* eslint-disable react/display-name */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-underscore-dangle */
import React, { memo } from 'react';

import { lazy } from '@loadable/component';
import { PrerenderedComponent } from 'react-prerendered-component';

const prerenderedLoadable = (dynamicImport) => {
  const LoadableComponent = lazy(dynamicImport);
  return memo((props) => (
    // you can use the `.preload()` method from react-loadable
    <PrerenderedComponent live={LoadableComponent.load()}>
      <LoadableComponent {...props} />
    </PrerenderedComponent>
  ));
};

export default prerenderedLoadable;
