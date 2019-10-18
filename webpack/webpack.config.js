const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '../src'),
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
        test: /\.styl$/,
        include: [path.resolve(__dirname, '../src')],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]',
                context: path.resolve(__dirname, '../src/')
              },
              importLoaders: true
            }
          },
          'stylus-loader'
        ]
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, '../node_modules/grimorio-ui/dist'),
          path.resolve(
            __dirname,
            '../node_modules/react-dates/lib/css/_datepicker.css'
          )
        ],
        sideEffects: true,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader'
        }
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
