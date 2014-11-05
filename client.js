var React = require('react');
var ChatApp = React.createFactory(require('./components/ChatApp.jsx'));
var Dispatcher = require('./lib/dispatcher');
var dispatcher = new Dispatcher();
window.React = React; // For debug tools

dispatcher.rehydrate(window.App);
React.render(ChatApp({
    dispatcher: dispatcher
}), document.getElementById('app'), function (err) {
    if (err) {
        throw err;
    }
});
