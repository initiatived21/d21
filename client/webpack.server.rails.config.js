/* global process, __dirname */

// Webpack configuration for server bundle

const webpack = require('webpack')
const path = require('path')

const devBuild = process.env.NODE_ENV !== 'production'
const nodeEnv = devBuild ? 'development' : 'production'

module.exports = {

  // the project dir
  context: __dirname,
  entry: [
    'babel-polyfill',
    'i18n-js',
    'imports?I18n=i18n-js!./vendor/translations',
    './app/lib/startup/serverRegistration',
  ],
  output: {
    filename: 'server-bundle.js',
    path: '../app/assets/webpack',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      lib: path.join(process.cwd(), 'app', 'lib'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
      },
    }),
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'strip-loader?strip[]=console.log!babel-loader', exclude: /node_modules/ },
      { test: require.resolve('i18n-js'), loader: 'expose?I18n' },
    ],
  },
}
