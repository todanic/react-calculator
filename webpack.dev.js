const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js'
  },
  devServer: {
    host: 'localhost',
    port: '3000',
    historyApiFallback: true,
    open: true,
    hot: true
  }
});
