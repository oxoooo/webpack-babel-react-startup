const webpack = require('webpack');
const join = require('path').join;

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: {
    main: [
      './src/client.js',
    ],
  },

  devtool: 'source-map',

  output: {
    path: join(__dirname, 'dist'),
    publicPath: '/assets/',
    filename: '[name]-[hash].js',
  },

  resolve: {
    extensions: [ '.js' ]
  },

  module: {
    rules: [
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: { comments: false },
      sourceMap: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Hello World',
    }),
  ],

}
