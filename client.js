var React = require('react');
var ChatApp = React.createFactory(require('./components/ChatApp.jsx'));
window.React = React; // For debug tools

var showMessages = require('./actions/showMessages');
showMessages({}, function (err) {
    if (err) {
        throw err;
    }
    React.render(ChatApp(), document.getElementById('app'), function (err) {
        if (err) {
            throw err;
        }
    });
});
