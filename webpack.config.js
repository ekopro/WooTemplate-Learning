const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

//TODO need autoprefixer
//TODO need browsersync

module.exports = {
  watch: true,
  entry: {
      main: [ './dev/src/js/index.js','./dev/src/sass/style.sass'] // need include entry for sass file
    },
    output: {
    path: path.resolve(__dirname,'dev/dist/js'),
    filename: 'bundle.js'
 },
 devtool: 'source-map',
 plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: '../index.html',
            template: './dev/src/index.pug'
        }),
        new ExtractTextPlugin('../css/style.css')
   ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loaders: ['pug-loader']
      },
      {
          test: /\.(png|svg|jpg|gif)$/,
          loaders: 'file-loader',
          exclude: /fonts/,
          options: {
            outputPath: 'img/',
            name: '[name].[ext]',
            publicPath: './'
          }
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file-loader',
            options: {
            outputPath: '../fonts/'

          }
        },
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','sass-loader']
        })
      }
    ]
  }
}
