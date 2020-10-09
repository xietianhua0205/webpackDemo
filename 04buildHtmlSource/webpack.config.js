/**
 *  loader: 1. 下载  2.使用(配置loader)，
 *  plugins:1. 下载  2.引入  3. 使用
 *
 * */

const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {},
    plugins: [
        // plugins的配置
        // html-webpack-plugin
        new HtmlWebpackPlugin()
    ],
    mode: 'development'
}
