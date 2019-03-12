const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { version } = require("./package.json");

module.exports = {
  mode: "none",
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "./dist"),
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.woff$/,
        use: "file-loader?name=[name].[hash].[ext]"
      }
    ]
  },

  plugins: [
    new webpack.BannerPlugin(`brown-university-styles v${version}`),
    new MiniCssExtractPlugin({
      filename: "styles.css"
    })
  ]
};
