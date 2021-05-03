/* eslint-disable global-require */
module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require('postcss-preset-env')({
      browsers: 'last 2 versions',
      autoprefixer: {
        flexbox: 'no-2009'
      }
    }),
    require('autoprefixer'),
    require('postcss-flexbugs-fixes'),
    require('postcss-momentum-scrolling')(['auto', 'scroll'])
    // require('postcss-clamp')
    // require('flex-gap-polyfill')()
  ]
};
