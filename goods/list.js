var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//获取数据库连接对象
var connection = require('./mysql/db');
//处理post字段请求
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//处理跨域请求
app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


app.get('/',function(req,res){

    res.send('请求home成功');
});

//用户登录
app.post('/user/login', (req,res) => {
    var name = req.body.username;
    var passwd = req.body.password;
    var userStr = `select * from user where username="${name}" and password="${passwd}"`;
    connection.query(userStr,function(err,result){
        if(err){
            throw err;
        }else{
            res.send(result)
        }
    })
});

//用户注册
const port =  8080;
app.listen(port, () => {
    console.log('Express server listening on port ' + port);
});