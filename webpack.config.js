const path = require("path");

module.exports = {
  entry: `./source/js/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname, `build/js/`)
  },
  devServer: {
    contentBase: path.resolve(__dirname, `build`),
    open: true,
    port: 1337,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`
        },
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: `source-map`,
}
