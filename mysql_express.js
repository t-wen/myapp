var mysql      = require('mysql');
//引用mysql数据库模块去跟mysql数据库app做交互
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '661475chen',
    port: '3306',                   
    database: 'test', 
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', row[0].solution);
});

connection.end();