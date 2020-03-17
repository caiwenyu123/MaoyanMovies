const express = require('express');

const cors = require('cors');

const app = new express();

const request = require('request');

var obj = {
    success:true,
    data:[{
        imgurl:'https://p0.meituan.net/movie/7b437e3a0d08d10e374ddc34f71b88fe3379132.jpg@160w_220h_1e_1c',
        title:'少年的你',
        score:9.5
    },{
        imgurl:'https://p0.meituan.net/movie/70b4d52270257e71046767ea1be1bede2983514.jpg@160w_220h_1e_1c',
        title:'决战中途岛',
        score:0
    },{
        imgurl:'https://p0.meituan.net/movie/b932f7f678a3e28763b3b281b3e120ef13622509.jpg@160w_220h_1e_1c',
        title:'终结者：黑暗命运',
        score:8.6
    },{
        imgurl:'https://p1.meituan.net/movie/ddfb39b3491fa928f5aa3358464647c42801135.jpg@160w_220h_1e_1c',
        title:'受益人',
        score:0
    },{
        imgurl:'https://p0.meituan.net/movie/ecca4f0b95340b2c57006a1bace4c3f91386100.jpg@160w_220h_1e_1c',
        title:'天气之子',
        score:9.1
    },
        {
            imgurl:'https://p0.meituan.net/movie/fef0434cd212d1105c6f3fa8f2d359122452248.jpg@160w_220h_1e_1c',
            title:'我的拳王男友',
            score:0
        },{
            imgurl:'https://p0.meituan.net/movie/1cd7eccdeea4c443702b19bea0ba2ba52160055.jpg@160w_220h_1e_1c',
            title:'大约在冬季',
            score:0
        },{
            imgurl:'https://p0.meituan.net/movie/95cf063b73c8164a8e4e593a966a29f31524878.jpg@160w_220h_1e_1c',
            title:'霹雳娇娃',
            score:0
        },]
}

app.get('/getMovie',cors(),function(req,res){
	res.send(obj);
});

app.listen(3000,function(){
	console.log('服务开启成功');
});