const webpack = require('webpack');
const join = require('path').join;

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: {
    main: [
      'webpack-hot-middleware/client',
      'babel-polyfill',
      './src/client.js',
    ],
  },

  devtool: 'inline-source-map',

  output: {
    path: join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name]-[hash].js',
  },

  resolve: {
    extensions: [ '.js' ]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ],
      },
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hello World',
    }),
  ],

}
