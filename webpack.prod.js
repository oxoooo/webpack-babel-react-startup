const webpack = require('webpack');
const join = require('path').join;

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: {
    main: [
      'babel-polyfill',
      'normalize.css',
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
    extensions: [ '.js', '.css', '.scss' ]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ],
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
              },
            },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader' },
          ],
        }),
      },
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
    new ExtractTextPlugin({
      filename: '[name]-[hash].css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Hello World',
    }),
  ],

}
