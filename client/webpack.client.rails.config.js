/* global process */

// Run like this:
// cd client && npm run build:dev:client
// Note that Foreman (Procfile.dev) has also been configured to take care of this.

const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const path = require('path')

const config = require('./webpack.client.base.config')
const devBuild = process.env.NODE_ENV !== 'production'

config.output = {
  filename: '[name]-bundle.js',
  path: '../app/assets/webpack',
}

// You can add entry points specific to rails here
// The es5-shim/sham is for capybara testing
config.entry.vendor.unshift(
  'es5-shim/es5-shim',
  'es5-shim/es5-sham'
)

// jquery-ujs MUST GO AFTER jquery, so must use 'push'
config.entry.vendor.push('jquery-ujs')

// See webpack.common.config for adding modules common to both the webpack dev server and rails
const stripConsoleLogs = !devBuild

config.module.loaders.push(
  {
    test: /\.jsx?$/,
    loader: `${stripConsoleLogs ? 'strip-loader?strip[]=console.log!' : ''}babel-loader`,
    exclude: /node_modules/,
  },
  {
    test: require.resolve('react'),
    loader: 'imports?shim=es5-shim/es5-shim&sham=es5-shim/es5-sham',
  },
  {
    test: require.resolve('jquery-ujs'),
    loader: 'imports?jQuery=jquery',
  },
  {
    test: /\.scss$/,
    include: [
      path.resolve(process.cwd(), 'app/assets/stylesheets')
    ],
    loader: 'file?name=[name].css!extract!css!postcss!sass'
  },
  {
    test: /\.woff$/,
    loader: 'url?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]'
  }
)

config.postcss = function() {
  return [autoprefixer({ browsers: ['last 2 versions'] })]
}

if (devBuild) {
  console.log('Webpack dev build for Rails') // eslint-disable-line no-console
  module.exports.devtool = 'eval-source-map'
} else {
  config.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      mangle: {
        // Keep React component names which our I18n depends on
        keep_fnames: true,
      },
      sourceMap: false,
    })
  )
  console.log('Webpack production build for Rails') // eslint-disable-line no-console
}

module.exports = config
