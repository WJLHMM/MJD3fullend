const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: '[name].[contenthash:6].css',
  chunkFilename: '[name].[contenthash:6].chunk.css',
})

const cssMinimizerPlugin = new CssMinimizerPlugin()

const terserPlugin = new TerserPlugin({
  terserOptions: {
    // extractComments: 'all',
    // output: {
    //   comments : true,
    // },
  },
})

const workboxPlugin = new WorkboxPlugin.GenerateSW({
  clientsClaim: true,
  skipWaiting: true,
})

const bundleAnalyzerPlugin = new BundleAnalyzerPlugin()

const prodConfig = {
  mode: "production",
  devtool: "cheap-module-source-map",
  plugins: [
    miniCssExtractPlugin,
    // workboxPlugin,
    bundleAnalyzerPlugin,
  ],
  optimization: {
    minimize: true,
    minimizer: [
      cssMinimizerPlugin,
      terserPlugin,
    ],
  },
  module: {
    rules: [
       { 
          test: /\.css$/, 
          use: [
            MiniCssExtractPlugin.loader,
            { 
              loader: 'css-loader', 
              options: { 
                importLoaders: 2,
              },
            },
            'postcss-loader',
          ],
        }, 
         {
          test: /\.less$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: '[path][name]-[local]-[hash:6]',
                },
                importLoaders: 2,
            },
            },
            { loader: 'less-loader' },
            'postcss-loader',
          ],
        }, // 配置处理.less文件的第三方loader规则
        {
          test: /\.scss$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: '[path][name]-[local]-[hash:6]',
                },
                importLoaders: 2,
              },
            },
            { loader: 'sass-loader' },
             'postcss-loader',
          ],
        },
    ],
  },
  output: {
    filename: '[name].[contenthash:6].js',
    chunkFilename: '[name].[contenthash:6].chunk.js',
  },
}

module.exports = merge(baseConfig, prodConfig)
