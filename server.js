const express = require('express')
const bodyParser = require('body-parser')
const serveStatic = require('serve-static');


const app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http);
global.io = io;
app.use(serveStatic(__dirname + "/public"));
app.use(bodyParser.json())

var fs = require('fs');
var files = fs.readdirSync(__dirname + "/logic/");

for (var i = 0; i < files.length; i++) {
    try {
        console.log("Loading", files[i]);
        app.use("/" + files[i].replace(".js", ""), require(__dirname + "/logic/" + files[i]).router)
    } catch (e) {
        console.log("Loading module failed", e);
    }
}



http.listen(8181);