module.exports = function (startPath) {
    return ('/public', (req, res, next) => {
        let fs = require('fs');
        let url = require('url');
        let path = url.parse(req.url).pathname;
        let fullPath = startPath + path;
        fs.readFile(fullPath, (error, data) => {
            if (!error) {
                res.end(data);
            }
        })
    })
}
