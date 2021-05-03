const path = require('path');

module.exports = {
  appIndexJs: path.resolve(__dirname, './src/index.js'),
  buildPath: path.resolve(__dirname, './build'),
  appHtml: path.resolve(__dirname, './public/index.html'),
  publicPath: '/'
};
