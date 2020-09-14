const fs = require('fs');

//异步文件写入
fs.writeFile('./test1.txt', '文件写入测试', (error) => {
    if (error) {
        console.log("写入失败：", error);
    } else {
        console.log("写入成功1");
    }
})
fs.writeFileSync //同步文件写入

//异步文件内容追加
fs.appendFile('./test1.txt', 'hello world!！', (error) => {
    if (error) {
        console.log("写入失败：", error);
    } else {
        console.log("写入成功2");
    }
})
fs.appendFileSync //同步文件内容追加

//异步文件读取
fs.readFile('./test1.txt', (error, data) => {
    if (error) {
        console.log("写入失败：", error);
    } else {
        console.log("写入成功", data.toString());
        console.log("写入成功", data + "");
    }
})
fs.readFileSync //同步文件读取