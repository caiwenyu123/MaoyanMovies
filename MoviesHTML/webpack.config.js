const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader:'url-loader',
                options:{
                    limit:10000,
                    publicPath:'/src/'
                }
            }
        ]
    },
    devServer:{
        host:'localhost',
        //服务端压缩是否开启
        compress:true,
        //配置服务端口号
        port:8090
    },
    watchOptions:{
        poll:50,//监测修改的时间(ms)
        ignored:/node_modules/,//不监测
    }
}
