var fs = require('fs');
app.engine('ntl', function (filePath, options, callback){
    fs.readFile(filePath, function (err, content) {
        if (err) return callback(new Error(err));
        var rendered = content.toString().replace('#title#', '<title>' + options.title +'</title>')
        .replace('#message#', '<h1>' + options.message + '</h1>');
        return callback(null, rendered);
    })
});
app.set('views', './views');
app.set('view engine', 'ntl');
app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!'});
})