require('node-jsx').install({
    extension: '.jsx'
});
var express = require('express');
var React = require('react');
var server = express();
server.use(express.static('./'));

var ChatApp = React.createFactory(require('./components/ChatApp.jsx'));
var showMessages= require('./actions/showMessages');

server.get('/', function (req, res, next) {
    showMessages();

    var html = React.renderToString(ChatApp());

    res.write('<html>');
    res.write('<head>');
    res.write('<title>Chat</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<div id="app">' + html + '</div>');
    res.write('</body>');
    res.write('<script src="/build/js/client.js"></script>')
    res.write('</html>');
    res.end();
});


var port = process.env.PORT || 3000;
server.listen(port);
console.log('Listening on port ' + port);
