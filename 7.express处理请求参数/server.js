const express = require('express');
const bodyParser = require('body-parser');
const server = express();

//响应页面
server.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//处理get请求
server.get('/api/list', (req, res) => {
    console.log(req.url)
    // let result = require('url').parse(req.url).query;
    let result = req.query;
    // console.log(result);
});


//处理POST请求的参数
server.use('*', bodyParser());  //该操作为POST上传参数的内容请求,必须放在请求的前面

//处理POST请求
server.post('/api/login', (req, res) => {
    //取得参数
    console.log(req.url);
    console.log(req.query);  //和GET请求中的req.query一样  一个为上传的参数 一个为请求的参数
});

server.listen('8000', '192.168.31.127', error => {
    if(error){
        console.log('失败')
    }else{
        console.log('成功')
    }
})