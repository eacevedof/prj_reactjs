//webpack.config.js 1.0.0
//https://stackoverflow.com/questions/36073576/how-to-properly-store-react-components-in-separate-files-and-import-react
var path    = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: 'http://localhost:8080/public/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
   loaders: [
      {
        test      : /\.jsx?$/,
        include   : path.join(__dirname, 'src'),
        loader    : 'react-hot!babel'
      },
      {
        test      : /\.scss$/,
        include   : path.join(__dirname, 'sass'),
        loaders   : ["style", "css?sourceMap", "sass?sourceMap"]
      },
      {
          test    : /\.(png|jpg|svg)$/,
          include : path.join(__dirname, 'img'),
          loader  : 'url-loader?limit=30000&name=images/[name].[ext]'
     } // inline base64 URLs for <=30k images, direct URLs for the rest
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};