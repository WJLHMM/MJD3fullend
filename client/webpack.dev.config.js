const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge');

const baseCongif = require('./webpack.base.config');

const hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin()// 热更新插件依赖于 webpack-dev-server,开发用

const devConfig = {
  mode: "development",
  devtool: "cheap-module-evel-source-map",
  plugins: [
    hotModuleReplacementPlugin,
  ],
  module: { // 所有第三方，模块的配置规则
      rules: [// 第三方匹配规则
        {
          test: /\.less$/,
          use: [
            { loader: 'style-loader' },
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
            { loader: 'style-loader' },
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
        }, //  配置处理.scss文件的第三方loader规则
        { 
          test: /\.css$/, 
          use: [
            'style-loader', 
            { 
              loader: 'css-loader', 
              options: { 
                importLoaders: 2,
              },
            },
            'postcss-loader',
          ],
        }, // 配置处理.css文件的第三方loader规则,并且不使用css modules
      ],
    },
  // optimization: {
    
  // },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    historyApiFallback: true, // 防止路由匹配不上出现报错，404
    disableHostCheck: true, // IE中 Invalid Host/Origin header问题
    open: true,
    hot: true,
    // hotOnly: true,
    port:6100,
  },
}

module.exports = merge(baseCongif, devConfig)
