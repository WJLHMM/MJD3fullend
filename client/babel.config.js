module.exports = {
    comments: true,
    presets: [
        ["@babel/preset-env", {
            useBuiltIns: "usage",
            corejs: 3,
        }], //预设@babel/polyfill按需加载
        "@babel/preset-react", //预设react
    ],
    plugins: [
        [
            "@babel/proposal-decorators", { legacy: true }], //启用装饰器插件
            "@babel/plugin-transform-runtime", //babel按需加载
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-syntax-dynamic-import",
            ["import", { libraryName: "antd-mobile", style: "css" }, //antd-mobile按需加载css
        ],
    ],
}
