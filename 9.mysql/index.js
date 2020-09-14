const express = require('express')
const app = express()


// 创建数据库连接
const mysql = require('mysql')
const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'test'
    })
    // 祖册 解析表单的body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/getheros', (req, res) => {
    // 定义SQL语句
    const sqlStr = 'select * from text where isdel=0'
    conn.query(sqlStr, (err, results) => {
        console.log(results)
        if (err) return res.json({ err_code: 1, message: '获取失败', affectedRows: 0 })
        res.json({
            err_code: 0,
            message: results,
            affectedRows: 0
        })
    })
})


app.listen(5000, (error) => {
    if (error) {
        console.log('打印失败');
    } else {
        // 打印一下
        console.log('http://127.0.0.1:5000')
    }
})