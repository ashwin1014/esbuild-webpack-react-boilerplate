import React, { Suspense } from 'react';

import { Switch, Route } from 'react-router-dom';

import { Loader } from '../sharedComponents';
import { ROUTES } from './Routes.config';

const AppRoutes = () => {
  return (
    <Suspense fallback={Loader}>
      <Switch>
        {(ROUTES || []).map((route) => (
          <Route key={route.key} path={route.path} exact={route.exact}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
