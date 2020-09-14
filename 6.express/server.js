const express = require('express');

//创建服务
const server = express();


//处理静态资源 参数1:处理请求路径的开头 参数2:express.static(静态资源存放的路径)
// server.use('/js', express.static('./www/js'));
// server.use('/css', express.static('./www/css'));
server.use('/public', express.static('./static'));


//处理get请求
// server.get();
//处理post请求
// server.post();

//参数1:处理请求的路径
//参数2:处理该请求的执行函数

server.get('/', (req, res) => {
    //响应给客户端一个文件夹（路径为系统绝对路径）
    res.sendFile(__dirname+'/www/index.html');
});
server.post('/api/login', (req, res) => {
    res.json({
        code: 0,
        message: '登陆成功'
    })
});

server.listen(8000, '192.168.31.127', error => {
    if(error){
        console.log("失败");
    }else{
        console.log("成功");
    }
})