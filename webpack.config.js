'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  debug: true,
  context: path.join(__dirname, 'lib'),
  entry: {
    login: './login',
    confirmation: './confirmation',
    calendar_page: './calendar_page',
    cookies: './cookies'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  externals: {
    'ga': 'ga'  // require('ga') is external and available on the global variable ga
  },
  devtool: 'source-map',
  target: 'web',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'lib'),
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.mustache$/,
        include: /views\/client/,
        loader: 'mustache?noShortcut'
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-au/)
  ],
  node: {
   fs: 'empty'
  },
  resolve: {
    alias: {
      'hogan.js': 'hogan.js/dist/template-3.0.2.js'
    }
  }
};
