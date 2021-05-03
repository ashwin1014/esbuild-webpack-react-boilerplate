# 📦 React Boiler plate that combines webpack5 and esbuild

A React boilerplate that combines the Webpack ecosystem and esbuild's fast build/transpilation speed.

## Installation

Clone this repo and npm install.

```bash
npm i or yarn install
```

## Usage

### Development server

```bash
npm start or yarn start
```

You can view the development server at `localhost:3000`.

### Production build

```bash
npm run build or yarn build
```

## Features

- [webpack](https://webpack.js.org/)
- [esbuild-loader](https://github.com/privatenumber/esbuild-loader)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [Styled Components](https://styled-components.com/)
- [PostCSS](https://postcss.org/)
- [React Helmet Async](https://www.npmjs.com/package/react-helmet-async)

## Development Dependencies

### Webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server
- [`webpack-bundle-analyze`](https://github.com/webpack/webpack-dev-server) - Visualize size of webpack output files with an interactive zoomable treemap.

### Webpack Plugins

- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`webpack-subresource-integrity`](https://www.npmjs.com/package/webpack-subresource-integrity) - Webpack plugin for enabling Subresource Integrity.
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`compression-webpack-plugin`](https://www.npmjs.com/package/compression-webpack-plugin) - Prepare compressed versions of assets to serve them with Content-Encoding.
- [`image-minimizer-webpack-plugin`](https://www.npmjs.com/package/image-minimizer-webpack-plugin) - Plugin and Loader for webpack to optimize (compress) all images using imagemin.
- [`@svgr/webpack`](https://www.npmjs.com/package/@svgr/webpack) - Webpack loader for SVGR. (Transform SVGs into React components.
  )

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Use properties directly on a class (an example Babel config)
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel
- [`@babel/eslint-parser`](https://www.npmjs.com/package/@babel/eslint-parser) - allows you to lint ALL valid Babel code with the fantastic ESLint.
- [`@babel/eslint-plugin`](https://www.npmjs.com/package/@babel/eslint-plugin) - Companion rules for @babel/eslint-parser
- [`babel-plugin-styled-components`](https://www.npmjs.com/package/babel-plugin-styled-components) - For easier debugging of styled components

### Loaders

- [`esbuild-loader`](https://github.com/privatenumber/esbuild-loader) - lets you harness the speed of esbuild in your Webpack build by offering faster alternatives for transpilation (eg. babel-loader/ts-loader) and minification (eg. Terser)!
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
  - [`dart-sass`](https://www.npmjs.com/package/sass) - Dart Sass
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS
  - [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Sensible defaults for PostCSS
  - [`autoprefixer`](https://www.npmjs.com/package/autoprefixer) - PostCSS plugin to parse CSS and add vendor prefixes to CSS rules
  - [`postcss-flexbugs-fixes`](https://www.npmjs.com/package/postcss-flexbugs-fixes) - PostCSS plugin This project tries to fix all of flexbug's issues.
  - [`postcss-momentum-scrolling`](https://www.npmjs.com/package/postcss-momentum-scrolling) - PostCSS plugin for adding momentum style scrolling behavior (-webkit-overflow-scrolling:touch) for elements with overflow (scroll, auto) on iOS.
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM

### Linters

- [`@babel/eslint-parser`](https://www.npmjs.com/package/@babel/eslint-parser) - allows you to lint ALL valid Babel code with the fantastic ESLint.
- [`@babel/eslint-plugin`](https://www.npmjs.com/package/@babel/eslint-plugin) - Companion rules for @babel/eslint-parser
- [`eslint`](https://github.com/eslint/eslint) - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code
- [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb) - Base styleguide to enforce rules
- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) - Implement prettier rules
- [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import) - Implement import rules
- [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier) - Dependency for prettier usage with ESLint
- [`eslint-import-resolver-webpack`](https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers/webpack) - Throw exceptions for import/export in webpack
- [`eslint-webpack-plugin`](https://github.com/webpack-contrib/eslint-webpack-plugin) - ESLint configuration for webpack
- [`prettier`](https://github.com/prettier/prettier) - Dependency for `prettier-webpack-plugin` plugin

### Other Tools

- [`pmmmwh/react-refresh-webpack-plugin`](https://github.com/pmmmwh/react-refresh-webpack-plugin) - An EXPERIMENTAL Webpack plugin to enable "Fast Refresh" (also previously known as Hot Reloading) for React components.

## React based dependencies

- [`react-helmet-async`](https://www.npmjs.com/package/react-helmet-async) - A fork of "React Helmet" that manages all of your changes to the document head
- [`react-localization`](https://www.npmjs.com/package/react-localization) - Simple module to localize the React interface using the same syntax used in the ReactNativeLocalization module.
- [`styled-components`](https://github.com/styled-components/styled-components) - A CSS in JS solution which utilizes tagged template literals (a recent addition to JavaScript) and the power of CSS, to write actual CSS code to style your components.
- [`classnames`](https://www.npmjs.com/package/classnames) - A simple JavaScript utility for conditionally joining classNames together.
- [`axios`](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js

## Author

- Ashwin Bordoloi

## License

This project is open source and available under the [MIT License](LICENSE).
