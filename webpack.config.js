const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => ({
  entry: './js/configurator_main.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  mode: argv.mode || 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src', to: 'src' },
        { from: 'js', to: 'js' },
        { from: 'images', to: 'images' },
        {
          from: 'node_modules/openlayers/dist',
          to: 'node_modules/openlayers/dist'
        }
      ]
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser'
    })
  ],
  devServer: {
    static: {
      directory: __dirname + '/dist'
    }
  },
  resolve: {
    alias: {
      fs: path.resolve(__dirname, './js/stub.js'),
      dgram: path.resolve(__dirname, './js/stub.js'),
      child_process: path.resolve(__dirname, './js/stub.js')
    },
    fallback: {
      'stream': require.resolve('stream-browserify'),
      'path': require.resolve('path-browserify'),
      'util': require.resolve('util/'),
      'crypto': require.resolve('crypto-browserify'),
      'os': require.resolve('os-browserify/browser'),
      'assert': require.resolve('assert/'),
      'console': require.resolve('console-browserify'),
      'timers': require.resolve('timers-browserify'),
      'vm': require.resolve('vm-browserify'),
      'process': require.resolve('process/browser'),

      'fs': false,
      'child_process': false,
      'dgram': false,
      'net': false,
      'nw.gui': false
    }
  }
});
