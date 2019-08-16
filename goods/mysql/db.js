var mysql = require('mysql');
var dbMsg = {
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'goods'
};


var connection = mysql.createConnection(dbMsg);
connection.connect();
module.exports = connection;