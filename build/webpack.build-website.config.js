'use strict'
const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')

module.exports = {
  entry: {
    ['website']: path.resolve(__dirname, '../docs/website/main.js')
  },
  output: {
    path: path.resolve(__dirname, '../template'),
    filename: 'website/[name].js',
    chunkFilename: 'website/[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loaders: [{
          loader: 'vue-loader',
          options: {
            postcss: {
              plugins: [autoprefixer({browsers: ['> 1%', 'ie >= 9', 'iOS >= 6', 'Android >= 2.1']})]
            }
          }
        }]
      },
      {
        test: /\.(css|scss|sass)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.md$/,
        use: 'raw-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|svg)(\?t=\d+)?$/,
        loaders: [{
          loader: 'url-loader?limit=8192&name=/website/assets/[name]-[hash].[ext]'
        }]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new HtmlwebpackPlugin({
      template: path.resolve(__dirname, '../docs/website/index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
      compress: {
        warnings: false
      }
    })
  ]
}
