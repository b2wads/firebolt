const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cssNano = require('cssnano')
const postcssCustomProperties = require('postcss-custom-properties')

const grmPostCSS = [
  postcssCustomProperties({
    preserve: false, // Opção para sobrescrever as variaveis
    importFrom: [
      './node_modules/@b2wads/grimorio-ui/lib/css/variables.css',
      './src/assets/css/variables.css',
    ],
  }),
]

const stylysPostCSS = [cssNano({ preset: 'default' })]

module.exports = {
  entry: {
    boilerplate: [
      path.resolve(
        __dirname,
        '../node_modules/@b2wads/grimorio-ui/lib/css/grimorio-ui-custom.min.css'
      ),
      path.resolve(__dirname, '../src'),
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
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
              postcssOptions: {
                plugins: grmPostCSS,
              },
            },
          },
        ],
      },
      {
        test: /.*\.(gif|svg|png|jpe?g)$/i,
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
              postcssOptions: {
                plugins: stylysPostCSS,
              },
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
      title: 'Firebolt',
      template: './index.html',
      minify: false,
    }),
  ],
}
