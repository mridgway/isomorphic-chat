require('node-jsx').install({
    extension: '.jsx'
});
var express = require('express');
var expstate = require('express-state');
var React = require('react');
var server = express();
expstate.extend(server);
server.use(express.static('./'));
var Dispatcher = require('./lib/dispatcher');

var ChatApp = React.createFactory(require('./components/ChatApp.jsx'));
var showMessages= require('./actions/showMessages');

server.get('/', function (req, res, next) {
    var dispatcher = new Dispatcher();
    showMessages(dispatcher, {}, function (err) {
        if (err) {
            next(err);
            return;
        }
        var html = React.renderToString(ChatApp({
            dispatcher: dispatcher
        }));

        res.expose(dispatcher.dehydrate(), 'App');

        res.write('<html>');
        res.write('<head>');
        res.write('<title>Chat</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<div id="app">' + html + '</div>');
        res.write('</body>');
        res.write('<script>' + res.locals.state + '</script>');
        res.write('<script src="/build/js/client.js"></script>');
        res.write('</html>');
        res.end();
    });
});


var port = process.env.PORT || 3000;
server.listen(port);
console.log('Listening on port ' + port);
