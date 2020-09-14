module.exports = function(hostname){
    return (req, res)=>{
        const http = require('http');
        // 创建请求
        http.request(
            {
                hostname,
                port: 80,
                path: req.baseUrl + req.url
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
    }
}
