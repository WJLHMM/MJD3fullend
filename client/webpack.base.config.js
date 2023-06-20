const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "/public/index.html"), // Html文件位置
  filename: "index.html",
  minify: {
    // 压缩HTML文件
    // removeComments: true, // 移除HTML中的注释
    // collapseWhitespace: true, // 删除空白符与换行符
    // minifyCSS: true, // 压缩内联css
  },
  inject: true,
});
//打包前清理上一次项目生成的 bundle 文件
const cleanWebpackPlugin = new CleanWebpackPlugin();

const baseConfig = {
  entry: {
    main: path.join(__dirname, "/src/index.js"),
  },
  plugins: [htmlPlugin, cleanWebpackPlugin],
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].[hash:6].js",
    chunkFilename: "[name].[hash:6].chunk.js",
    publicPath:
      "/" /* 在配置二级更多极路由时候 刷新会出现 404的报错，是因为使用BrowserRouter需后台后台配合，在开发环境中配置本行和 historyApiFallback: true */,
  },
  module: {
    // 所有第三方，模块的配置规则
    rules: [
      // 第三方匹配规则
      // {
      //   enforce: 'pre',
      //   test: /\.js|.jsx?$/,
      //   loader: "eslint-loader",
      //   exclude: /node_modules/,
      // },
      {
        test: /\.js|jsx$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      { test: /\.jpg|png|gif|bmp|jpeg$/, use: "url-loader" },
      { test: /\.ttf|eot|svg|woff|woff2$/, use: "url-loader" }, // 这里是处理文字文件，同上面同一个处理loader但是不要放在一起
    ],
  },
  optimization: {
    usedExports: true,
    moduleIds: false,
    runtimeChunk: {
      name: "runtime",
    },
    splitChunks: {
      chunks: "all",
    },
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"], // 默认这几中文件名后缀自动补上，顺序很重要，webpack默认js json可以省略 添加jsx
    alias: {
      "@": path.join(__dirname, "./src"), // 设置@ 符号代表根目录到src的绝对路径
    },
  },
};

module.exports = baseConfig;
