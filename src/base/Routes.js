import React, { Suspense, lazy } from 'react';

import { Switch, Route } from 'react-router-dom';

import { Loader } from '@sharedComponents';
import { ROUTES } from './Routes.config';

const PageNoteFound = lazy(() => import('@pages/NotFound/NotFound'));

const AppRoutes = () => {
  return (
    <Suspense fallback={Loader}>
      <Switch>
        {(ROUTES || []).map((route) => (
          <Route key={route.key} path={route.path} exact={route.exact}>
            <route.component />
          </Route>
        ))}
        <Route>
          <PageNoteFound />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
