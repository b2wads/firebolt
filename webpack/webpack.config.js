const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// const extractSass = new MiniCssExtractPlugin({
//   filename: `app.css`,
//   allChunks: true
// })

const extractTheme = new MiniCssExtractPlugin({
  filename: `grimorio-ui.css`,
  allChunks: true
})

module.exports = {
  entry: path.resolve(__dirname, 'src', 'app.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  plugins: [extractTheme],
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
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, '../node_modules/grimorio-ui/dist/'),
          path.resolve(
            __dirname,
            '../node_modules/grimorio-ui/node_modules/react-dates/lib/css/_datepicker.css'
          )
        ],
        loader: extractTheme.extract('style-loader', ['css-loader'])
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
}
