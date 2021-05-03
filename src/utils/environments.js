const MODE = {
  development: 'development',
  production: 'production'
};

const isProduction = () => process.env.APP_ENVIRONMENT === 'production';

const isDevelopment = () => process.env.APP_ENVIRONMENT === 'development';

export default MODE[process.env.NODE_ENV];

export { isProduction, isDevelopment };
