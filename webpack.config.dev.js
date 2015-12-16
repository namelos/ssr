var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('app.css', {
      allChunks: true
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: path.join(__dirname, 'node_modules') },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style',
        'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'),
        include: path.join(__dirname, '.')
      }
    ]
  }
};
