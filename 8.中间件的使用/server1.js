const express = require('express');
const handleStatic = require('./www/middlewave');
const proxy = require('http-proxy-middleware');

// 创建服务
const server = express();

server.get('/', (req, res) => {
    res.sendFile(__dirname + '/www/index.html');
});

server.use('/public', handleStatic('./static'));



// http://m.maoyan.com

// server.use('/ajax', (req, res)=>{
//     const http = require('http');
//     // 创建请求
//     http.request(
//         {
//             hostname: 'm.maoyan.com',
//             port: 80,
//             path: req.baseUrl + req.url
//         },
//         (response)=>{
//             //接收数据
//             let result = '';
//             response.on('data', (data)=>{
//                 result += data;
//             })
//             // 接收完毕，将数据响应给客户端
//             response.on('end', ()=>{
//                 res.json(JSON.parse(result));
//             })
//         }
//     )
//     //发送请求
//     .end();
// })


/*
server.get('/ajax/movieOnInfoList', (req, res)=>{
    const http = require('http');
    // 创建请求
    http.request(
        {
            hostname: 'm.maoyan.com',
            port: 80,
            path: req.url
        },
        (response)=>{
            //接收数据
            let result = '';
            response.on('data', (data)=>{
                result += data;
            })
            // 接收完毕，将数据响应给客户端
            response.on('end', ()=>{
                res.json(JSON.parse(result));
            })
        }
    )
    //发送请求
    .end();
})
 
 
server.get('/ajax/mostExpected', (req, res)=>{
    const http = require('http');
    // 创建请求
    http.request(
        {
            hostname: 'm.maoyan.com',
            port: 80,
            path: req.url
        },
        (response)=>{
            //接收数据
            let result = '';
            response.on('data', (data)=>{
                result += data;
            })
            // 接收完毕，将数据响应给客户端
            response.on('end', ()=>{
                res.json(JSON.parse(result));
            })
        }
    )
    //发送请求
    .end();
})
 
 
server.get('/ajax/comingList', (req, res)=>{
    const http = require('http');
    // 创建请求
    http.request(
        {
            hostname: 'm.maoyan.com',
            port: 80,
            path: req.url
        },
        (response)=>{
            //接收数据
            let result = '';
            response.on('data', (data)=>{
                result += data;
            })
            // 接收完毕，将数据响应给客户端
            response.on('end', ()=>{
                res.json(JSON.parse(result));
            })
        }
    )
    //发送请求
    .end();
})
*/

//中间件代理
server.use('/ajax', proxy({ target: 'http://m.maoyan.com', changeOrigin: true }))


// 启动服务监听
server.listen(7000, (error) => {
    if (error) {
        console.log('启动失败');
    } else {
        console.log('启动成功');
    }
})