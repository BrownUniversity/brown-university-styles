const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { version } = require("./package.json");

module.exports = {
  mode: "production",
  output: {
    filename: "index.js",
    libraryTarget: "umd",
    assetModuleFilename: "[name].[contenthash][ext]",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.woff$/,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new webpack.BannerPlugin(`brown-university-styles v${version}`),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
};
