const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
  mode: "production",

  // it indicates which files webpack should use to being building out
  entry: './dev/assets/js/index.ts',

  // where should webpack put generated files
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              // should loader copy files to dist folder,
              // set to to false, as we will manually copy the files
              url: false,
            }
          }
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),

    new HtmlWebpackPlugin({
      hash: true, // hash for cache bursting
      template: "dev/index.html", // source template
      minify: true, // should html file be minified?
      inject: false,
    }),

    //Copy folders or files example - you can use this if you want webpack to also copy files into ./dist/ and leave as they are.
    // new CopyPlugin({
    //   patterns: [
    //     {from: "dev/assets/img", to: "assets/img"},
    //     {from: "dev/robots.txt", to: "robots.txt"},
    //     {from: "dev/assets/js/third-party-library.js", to: "assets/js/third-party-library.js"},
    //   ],
    // }),

  ],

  devServer: {
    contentBase: path.join(__dirname),
    port: 3000,
    hot: true,
  },
};