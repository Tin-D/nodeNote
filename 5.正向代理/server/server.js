const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
    let path = url.parse(req.url).pathname;
    console.log(path);
    //首页
    if (path === '/') {
        let result = fs.readFileSync('./www/index.html')
        res.end(result);
    } else if (path === '/css/style.css') {
        let result = fs.readFileSync('./www/css/style.css')
        res.end(result);
    } else if (path === '/js/index.js') {
        let result = fs.readFileSync('./www/js/index.js')
        res.end(result);
    } else if (path === '/movie/list') {
        let options = {
            hostname: 'm.maoyan.com',
            port: '80',
            path: '/ajax/movieOnInfoList?token='
        };
        // 发送请求
        let request = http.request(options, (response) => {
            console.log('接收到了');
            // 接收数据
            let data = '';
            response.on('data', (buffer) => {
                data += buffer;
                console.log(buffer + '');
            });
            // 接收完成
            response.on('end', () => {
                console.log('接受据完成');
                // 处理最终的数据
                fs.writeFileSync('./test.json', data);
            })

        });
        request.end();
    }
})

server.listen(8080, '192.168.31.127', (error) => {
    if (error) {
        console.log('创建失败');
    } else {
        console.log('创建成功');
    }
})