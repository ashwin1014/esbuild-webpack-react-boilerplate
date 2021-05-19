import React, { Suspense } from 'react';

// import { lazy } from '@loadable/component';
import { Switch, Route } from 'react-router-dom';

import { PrivateRoute } from '@hoc';
import { Loader } from '@sharedComponents';
import { ROUTES } from './Routes.config';
import prerenderedLoadable from './preRenderedLoadable';

const PageNotFound = prerenderedLoadable(() => import('@pages/NotFound/NotFound'));

const AppRoutes = () => {
  const isAuthenticated = false;
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {(ROUTES || []).map((route) =>
          route.isPrivate ? (
            <PrivateRoute authenticated={isAuthenticated} redirectPath='/' key={route.key} path={route.path} exact={route.exact} component={route.component} />
          ) : (
            <Route key={route.key} path={route.path} exact={route.exact} component={route.component} />
          )
        )}
        <Route component={PageNotFound} />
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
