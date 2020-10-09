/**
 * webpack.config.js  webpack 的配置文件
 *   作用：运行 webpack 的时候加载里面的配置，以里面的配置干活
 *
 *   所有的构建工具 node.js  采用 common.js
 *
 * */

    // resolve 用来拼接绝对路径的方法
const {resolve} = require('path')

module.exports = {
    entry: './src/index.js', // 入口起点
    output: {
        // 输出文件名
        filename: 'built.js',

        // 输出路径
        // _dirname :当前文件的目录的绝对路径
        path: resolve(__dirname, 'build')

    },
    // loader 配置
    module: {
        rules: [{
            // 匹配哪些文件
            test: /\.css$/,
            // 使用哪些文件按
            use: [
                // use 数组中loader 执行顺寻，从右到左，从下到上依次执行
                // 创建style标签，将js中的样式资源插入进行，添加到 head 中生效
                'style-loader',
                // 将 css 文件以字符串 变成 common.js 模块加载到js,里面的内容是样式字符串
                'css-loader'
            ]
        },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    // 将less 文件编译成 css 文件 和 less
                    'less-loader'
                ]
            }
        ]
    },
    // plugins 的配置
    plugins: [],
    // 模式
    mode: 'development'
    // mode:'production'
}
