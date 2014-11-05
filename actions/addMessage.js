var dispatcher = require('../lib/dispatcher');
var i = require('../data/messages').length;

module.exports = function (payload) {
    var message = payload;
    message.id = 'm_' + ++i;
    message.timestamp = Date.now();
    dispatcher.dispatch({
        type: 'ADD_MESSAGE',
        message: message
    });
};
