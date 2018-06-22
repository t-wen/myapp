var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '661475chen',       
  port: '3306',                   
  database: 'my_db', 
}); 
 
connection.connect();

var response = {
    WechartName : 'gggg',
    PhoneNumber : '12345678',
    Password    : '12345678'
};

var  addSql = 'INSERT INTO Persons(WechartName, PhoneNumber, Password) VALUES(?,?,?)';
var  addSqlParams = ['response.WechartName', 'response.PhoneNumber', 'response.Password'];

connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
            console.log('INSERT ID:',result); 
            return;
        }        
});
 
connection.end();