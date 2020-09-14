const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (request, response) => {
    if (request.url == '/') {
        let res = fs.readFile('./index.html');
        console.log(res);
        response.end(res);
    }
})

server.listen(8000, 'localhost', (error) => {
    console.log(error)
});