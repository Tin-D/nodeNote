/* HTTP事务过程
    1、客户端向服务器发送请求
    2、服务器接收请求并处理请求
    3、服务器响应客户端结果
    4、客户端得到结果，处理结果，显示出来
 */

 const http = require('http');

 //创建服务器
 const server = http.createServer();

 //处理请求
 server.on('request', (request, response)=>{
    // request是客户端发送过来的请求对象
    // respons是将要响应给客户端的响应对象

    console.log("接收到了请求：" + request.url);  //request.url请求路径

    response.write('<h1>Hello World!</h1>');
    response.write('<mark>Hello World!</mark>');
    response.end('<mark>Hello World!</mark><h1>Hello World!</h1>');
 });

 //启动服务器
 server.listen(8081, 'localhost', (error)=>{
    if(error){
        console.log('创建服务器失败');
    }else{
        console.log('创建服务器成功');
    }
 });