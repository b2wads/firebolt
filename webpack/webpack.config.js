const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    boilerplate: [
      path.resolve(__dirname, '../node_modules/grimorio-ui/dist/grimorio-ui.min.css'),
      path.resolve(__dirname, '../src')
    ]
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        sideEffects: true,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader'
        }
      },
      {
        test: /\.styl$/,
        include: [path.resolve(__dirname, '../src')],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]'
              },
              importLoaders: true
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
