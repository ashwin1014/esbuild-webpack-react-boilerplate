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

## Project Features

### 1) **Component Scaffolding:** [Plop](https://plopjs.com/) - Easily create pages/components with consistency using the below command. Automatically creates Js, Scss and localization files at required directories. Templates can be modified by editing 'plopfile.js' file and 'plop-templates' directory.

```bash
npm generate or yarn generate
```

### 2) **Module Aliases:** Below are the list of aliases. These can be configured in webpack.config.js file

```
    "paths": {
      "@icons/*": ["src/assets/icons/*"],
      "@images/*": ["src/assets/images/*"],
      "@config/*": ["src/config/*"],
      "@constants/*": ["src/constants/*"],
      "@hooks/*": ["src/hooks/*"],
      "@hoc/*": ["src/hoc/*"],
      "@localization/*": ["src/localization/*"],
      "@sharedComponents/*": ["src/sharedComponents/*"],
      "@pages/*": ["src/app/pages/*"],
      "@utils/*": ["src/utils/*"],
      "@/*": ["src*"]
    };
```

```javascript
  /*Usage*/
  import { Space } from '@sharedComponents';
  import { FaBeer } from '@icons';
  .
  .
  .
  <Space><p>Hello</p><p>World</p><Space>
  <FaBeer />

```

### 3) **Styles**: Both sass and styled components have been added along with global variables.

```javascript
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.fontLg2};
`;
```

### 4) **Pre-configured route based splitting [Loadable Components](https://loadable-components.com/docs/getting-started)**; Import and add your routes to Routes.config.js in base directory.

```javascript
 import { lazy } from '@loadable/component';

 const About = lazy(() => import('@pages/About'));
 export const ROUTES = [
   .
   .
   .
   .
  {
    path: '/about',
    key: 'About',
    exact: true,
    component: About
  }
];
```

### 5) **Optimization**:

- [`ImageMinimizerWebpackPlugin`](https://webpack.js.org/plugins/image-minimizer-webpack-plugin/) - Lossless compression of images using imagemin plugin
- [`compression-webpack-plugin`](https://www.npmjs.com/package/compression-webpack-plugin) - Pre-configured "brotli" compress to prepare compressed versions of assets to serve them with Content-Encoding.

### 6) **SVG as React Components**: [@svgr/cli](https://react-svgr.com/docs/cli/)

```
/* 1) Place your svgs in assets/icons/svg folder*/
/* 2) run below command from cli */
```

```bash
yarn svgr or npm svgr
```

The above command will automatically create the React component in assets/icons folder;

usage:

```javascript
import { SadIcon } from '@icons';

<SadIcon />;
```

### 6) **Safe Commits**:

- [`lint-staged`](https://www.npmjs.com/package/lint-staged) - Run linters against staged git files and don't let 💩 slip into your code base!
- [`Husky`](https://typicode.github.io/husky/#/) - configured git hooks that runs "lint-staged" on committing your code and before push to repo.

### 7) **Secure Locale Storage**:

- [`secure-ls`](https://www.npmjs.com/package/secure-ls) - Secure localStorage data with high level of encryption and data compression.

usage:

```javascript
import { setLocalStorage, getLocalStorageKey } from '@utils/secureLocalStorage';

setLocalStorage('token', resp.accessToken);
const token = getLocalStorageKey('token');
```

## React based dependencies

- [`react-helmet-async`](https://www.npmjs.com/package/react-helmet-async) - A fork of "React Helmet" that manages all of your changes to the document head
- [`react-localization`](https://www.npmjs.com/package/react-localization) - Simple module to localize the React interface using the same syntax used in the ReactNativeLocalization module.
- [`styled-components`](https://github.com/styled-components/styled-components) - A CSS in JS solution which utilizes tagged template literals (a recent addition to JavaScript) and the power of CSS, to write actual CSS code to style your components.
- [`classnames`](https://www.npmjs.com/package/classnames) - A simple JavaScript utility for conditionally joining classNames together.
- [`axios`](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
- [`secure-ls`](https://www.npmjs.com/package/secure-ls) - Secure localStorage data with high level of encryption and data compression.
- [`react-icons`](https://react-icons.github.io/react-icons) - Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.

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
- [`plop`](https://plopjs.com/) - Plop is a little tool that saves you time and helps your team build new files with consistency.
- [`@svgr/cli`](https://react-svgr.com/docs/cli/) - A SVG to React transformer

## Author

- Ashwin Bordoloi

## License

This project is open source and available under the [MIT License](LICENSE).
