var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: "./server/server.ts",
  target: "node",
  output: {
    filename: "server.js",
    path: "dist",
    libraryTarget: "commonjs"
  },
  resolve: {
    extensions: ["", ".ts", ".js", ".json"]
  },
  externals: [
    nodeModules
  ],
  devtool: "eval-source-map",
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  node: {
    fs: "empty",
    child_process: "empty"
  }
};
