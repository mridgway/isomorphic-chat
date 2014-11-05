var Dispatcher = require('dispatchr')();
var MessageStore = require('../stores/MessageStore');

Dispatcher.registerStore(MessageStore);

module.exports = Dispatcher;
