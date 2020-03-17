// 引入所有的less文件
require('./less/reset.less');
require('./less/nav.less');
require('./less/body.less');

//  入口文件 jquery比较特殊，老的框架，需要额外进行处理
window.$ = require('jquery');

require('./javascript/main.js');