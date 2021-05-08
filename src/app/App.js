/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';

import Favicon from 'react-favicon';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';

import { ErrorBoundary } from '@hoc';
import Layout from '../layout/Layout';
import AppRoutes from '../base/Routes';

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/styleUtils/_variables.scss');

const App = () => {
  return (
    <HelmetProvider>
      <Favicon url='https://img.icons8.com/plasticine/344/react.png' />
      <ThemeProvider theme={theme}>
        <Layout>
          <ErrorBoundary>
            <Helmet>
              <meta name='description' content='React boilerplate with Webpack 5 and esbuild' />
            </Helmet>
            <AppRoutes />
          </ErrorBoundary>
        </Layout>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
