var express = require('express');
var mysql = require('mysql');
var app = express();
var config = require('./config.my');
var connection = mysql.createConnection(config);
connection.connect(function(err){
	if(err){
		console.log('err : '+err);
	}else{
		console.log('MYSQL:3306 connection succeed.');
	}
});


function getdata(res){

	connection.query('select * from board', function(err, rows, fields) {
	  if (!err) res.send(rows);
	  else res.send(rows);
	});

}


app.get('/', function (req, res) {
  res.send('designed by HUME.');
});

app.get('/db', function (req, res) {
  	getdata(res);
});

app.listen(3000, function () {
  console.log('JB_DB_TEST listening on port 3000...');
});