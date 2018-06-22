var express = require('express');
var app = express();
var fs = require('fs');

app.engine('ntl', function (filePath, options, callback){
    fs.readFile(filePath, function (err, content) {
        if (err) return callback(new Error(err));
        var rendered = content.toString().replace('#title#', '<title>' + options.title +'</title>')
        .replace('#message#', '<h1>' + options.message + '</h1>')
        .replace('#message1#', '<h2>' + options.message1 + '</h2>');
        return callback(null, rendered);
    })
});
app.set('views', './views');
app.set('view engine', 'ntl');

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!', message1: 'Tracy'});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});