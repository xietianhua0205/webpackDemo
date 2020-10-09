/**
 *  index.js : webpack入口起点文件
 *  1. 运行指令
 *     开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
 *
 *     生产环境：webpack ./src/index.js -o ./build/built.js --mode=production
 *
 *  2.结论：
 *     webpack 可以处理 js 和 json文件,不能处理css/image 等其它资源
 *     生产环境和ES6模块化编译成浏览器能识别的模块化
 *     生产环境比开发环境多一个压缩过后的js代码
 *
 *
 * */

// import './index.css'
import data from './data.json'

function add (x, y) {
    return x + y
}

console.log(add(1,2))
