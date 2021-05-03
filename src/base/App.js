import React from 'react';

import { Helmet, HelmetProvider } from 'react-helmet-async';

import Layout from '../layout/Layout';
import AppRoutes from './Routes';
import { ErrorBoundary } from '../hoc';

const App = () => {
  return (
    <HelmetProvider>
      <Layout>
        <ErrorBoundary>
          <Helmet>
            <meta name='description' content='React boilerplate with Webpack 5 and esbuild' />
          </Helmet>
          <AppRoutes />
        </ErrorBoundary>
      </Layout>
    </HelmetProvider>
  );
};

export default App;
