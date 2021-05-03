/* eslint-disable global-require */
// const webpack = require("webpack");
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');
const chalk = require('chalk');
const Dotenv = require('dotenv-webpack');
const SriPlugin = require('webpack-subresource-integrity');
const ESLintPlugin = require('eslint-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPrettierPlugin = require('webpack-prettier-plugin');
const ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const paths = require('./paths');

module.exports = (_, args) => {
  const { mode } = args;
  const isEnvDevelopment = mode === 'development';
  const isEnvProduction = mode === 'production';
  // eslint-disable-next-line no-console
  console.log(chalk.blue('ENV: ', mode));

  return {
    mode,
    entry: paths.appIndexJs,
    output: {
      path: paths.buildPath,
      publicPath: paths.publicPath,
      crossOriginLoading: 'anonymous',
      filename: 'static/js/[name].[contenthash:8].js'
    },
    devServer: {
      port: 3000,
      watchContentBase: true,
      hot: true,
      historyApiFallback: true,
      compress: true,
      contentBase: paths.buildPath,
      open: true
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'esbuild-loader',
          exclude: /nodeModules/,
          options: {
            loader: 'jsx',
            target: 'es2017'
            // plugins: [
            //   isEnvDevelopment && require("react-refresh/babel")
            // ].filter(Boolean)
          }
        },
        {
          test: /\.css$/,
          use: [
            isEnvProduction && MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            {
              loader: 'esbuild-loader',
              options: {
                loader: 'css',
                minify: isEnvProduction
              }
            },
            'postcss-loader'
          ].filter(Boolean),
          exclude: /\.module\.css$/
        },
        {
          test: /\.css$/,
          use: [
            isEnvProduction && MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true
              }
            },
            {
              loader: 'esbuild-loader',
              options: {
                loader: 'css',
                minify: isEnvProduction
              }
            },
            'postcss-loader'
          ].filter(Boolean),
          include: /\.module\.css$/
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            isEnvProduction && MiniCssExtractPlugin.loader,
            isEnvDevelopment && 'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
                sassOptions: {
                  fiber: require('fibers')
                }
              }
            },
            'postcss-loader'
          ].filter(Boolean)
        },
        {
          test: /\.less$/,
          use: [isEnvProduction && MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'].filter(Boolean)
        },
        {
          test: /\.png$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                mimetype: 'image/png'
              }
            }
          ]
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack']
        },
        {
          test: /\.(ogg|mp3|wav|mpe?g)$/i,
          use: 'file-loader'
        },
        {
          test: /favicon\.png$/,
          use: 'file-loader?name=[name].[ext]'
        },
        {
          oneOf: [
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
              use: {
                loader: 'url-loader'
              },
              // options: {
              //   name: 'static/media/[name].[hash:8].[ext]'
              // }
              type: 'asset/resource'
            },
            {
              test: [/\.(woff|woff2|eot|ttf)$/],
              use: {
                loader: 'url-loader'
              },
              // options: {
              //   name: 'static/media/[name].[hash:8].[ext]'
              // }
              type: 'asset/resource'
            }
          ].filter(Boolean)
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        inject: true,
        template: paths.appHtml,
        title: 'Welcome',
        ...(isEnvProduction
          ? {
              minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
              }
            }
          : undefined)
      }),
      new ResourceHintWebpackPlugin(),
      new SriPlugin({
        hashFuncNames: ['sha256', 'sha384'],
        enabled: isEnvProduction
      }),
      new Dotenv(),

      new ImageMinimizerPlugin({
        minimizerOptions: {
          plugins: [
            ['gifsicle', { interlaced: true }],
            ['jpegtran', { progressive: true }],
            ['optipng', { optimizationLevel: 5, interlaced: null }],
            ['mozjpeg', { quality: 80 }],
            [
              'svgo',
              {
                plugins: [
                  {
                    removeViewBox: false
                  }
                ]
              }
            ]
          ]
        }
      }),

      new ESLintPlugin({
        extensions: 'js',
        cache: true,
        eslintPath: require.resolve('eslint'),
        context: '.',
        cacheLocation: path.join('node_modules', '.cache', 'eslint', '.eslintcache'),
        resolvePluginsRelativeTo: __dirname,
        ignore: true,
        useEslintrc: true,
        emitWarning: true,
        quiet: true,
        fix: true
      }),
      new WebpackPrettierPlugin(),
      new CompressionPlugin({
        filename: '[path][base].br',
        algorithm: 'brotliCompress',
        test: /\.(js|css|html|svg)$/,
        compressionOptions: { level: 11 },
        threshold: 8192,
        minRatio: 0.8,
        deleteOriginalAssets: false
      }),
      // new webpack.HotModuleReplacementPlugin(),
      isEnvDevelopment && new ReactRefreshWebpackPlugin(),
      isEnvProduction &&
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].[contenthash:8].css',
          chunkFilename: 'static/css/[name].[contenthash:8].chunk.css'
        }),
      isEnvProduction &&
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: true
        })
    ].filter(Boolean),
    optimization: {
      minimize: isEnvProduction,
      minimizer: [
        new ESBuildMinifyPlugin({
          target: 'es2017',
          css: true
        })

        // new CssMinimizerPlugin(), '...'
      ],
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    }
  };
};
