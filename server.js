var express = require('express');

//create app
var app = express() || 3000;
const PORT = process.env.PORT;

app.use(function (req, res, next) { 
    if(req.headers['x-forwarded-proto'] === 'http'){
        next();
    }else{
        res.redirect('http://' + req.hostname + req.url);
    }
 });

app.use(express.static('public'));

app.listen(PORT, function () { console.log("listening on port" + PORT); });