const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const cssnano = require('cssnano');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name][fullhash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [cssnano({ preset: 'default' })]
              }
            }
          }
        ]
      }
    ]
  }
});
