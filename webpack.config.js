const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { plugins } = require('../pair-programming/build-tools-module/webpack.config');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './client/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ]
      }
    ]
  }
}