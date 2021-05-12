import React, { Suspense } from 'react';

import { lazy } from '@loadable/component';
import { Switch, Route } from 'react-router-dom';

import { Loader } from '@sharedComponents';
import { ROUTES } from './Routes.config';

const PageNoteFound = lazy(() => import('@pages/NotFound/NotFound'));

const AppRoutes = () => {
  return (
    <Suspense fallback={Loader}>
      <Switch>
        {(ROUTES || []).map((route) => (
          <Route key={route.key} path={route.path} exact={route.exact} component={route.component} />
        ))}
        <Route component={PageNoteFound} />
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
