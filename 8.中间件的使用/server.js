const express = require('express');
const handleStatic = require('./www/middlewave');

const server = express();

server.use('/main', (req, res, next) => {
    console.log('接收到了请求', req.url);
    console.log('use1');
    next(); //将请求传递给下一个处理方法,url是拼接回去的
});

server.use('/', (req, res, next) => {
    console.log('use2');
    next();
})

server.use('/main/hello', (req, res, next) => {
    console.log('use3');
    next();
})

server.use('/main/he', (req, res, next) => {
    console.log('use4');
    next();
})

server.get('/main/hello', (req, res) => {
    console.log('get请求拦截到了', req.url);
})

server.get('/', (req, res) => {
    res.sendFile(__dirname + '/www/index.html')
})


//中间件
server.use('/public', handleStatic('./static'));
// server.use('/public', (req, res, next) => {
//     let fs = require('fs');
//     let url = require('url');
//     let path = url.parse(req.url).pathname;
//     console.log(path);
//     let fullPath = './static' + path;
//     fs.readFile(fullPath, (error, data) => {
//         if(!error){
//             res.end(data);
//         }
//     })
// })

server.listen('8000', '192.168.31.127', error => {
    if (error) {
        console.log("失败");
    } else {
        console.log('成功');
    }
})