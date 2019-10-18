const path = require('path')
const ExtractCSS = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '../src'),
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.styl$/,
        include: [path.resolve(__dirname, '../src')],
        use: [
          {
            loader: ExtractCSS.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          {
            loader: 'css-loader',
            options: {},
          },
          'stylus-loader',
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: ExtractCSS.loader,
            options: {},
          },
          'css-loader',
        ],
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, '../node_modules/grimorio-ui/dist')],
        sideEffects: true,
        use: [ExtractCSS.loader, 'css-loader'],
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
        },
      },
    ],
  },
  plugins: [
    new ExtractCSS({
      filename: 'app.css',
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
}
