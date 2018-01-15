/* global require, __dirname, module */
const { resolve } = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: resolve(__dirname, "static"),
    publicPath: "/",
  },
  entry: resolve(__dirname, "src", "index.js"),
  module: {
    rules: [
      {
        test: /\.js/,
        use: {
          loader: "babel-loader",
        },
        include: resolve(__dirname, "src"),
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    path: resolve(__dirname, "dist"),
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "src", "index.html"),
    }),
    new CopyWebpackPlugin([{ from: resolve(__dirname, "static") }]),
  ],
}
