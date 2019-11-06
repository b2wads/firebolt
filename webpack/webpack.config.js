const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cssNano = require('cssnano')
const postcssCustomProperties = require('postcss-custom-properties')

module.exports = {
  entry: {
    boilerplate: [
      path.resolve(
        __dirname,
        '../node_modules/grimorio-ui/lib/css/grimorio-ui-custom.min.css'
      ),
      path.resolve(__dirname, '../src'),
    ],
  },
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
        test: /\.css/,
        sideEffects: true,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                postcssCustomProperties({
                  preserve: false, // Opção para sobrescrever as variaveis
                  importFrom: [
                    './node_modules/grimorio-ui/lib/css/variables.css',
                    './src/assets/css/variables.css',
                  ],
                }),
              ],
            },
          },
        ],
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
        },
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
              },
              importLoaders: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [cssNano({ preset: 'default' })],
            },
          },
          'stylus-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
}
