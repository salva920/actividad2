var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

require('./app/enlaces/enlaces')(app);

var server = app.listen(3000, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("servidor activo en http://%s:%s", host, port)
})