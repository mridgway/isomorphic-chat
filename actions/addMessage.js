var dispatcher = require('../lib/dispatcher');
var i = 7;

module.exports = function (payload) {
    var message = payload;
    message.id = 'm_' + ++i;
    message.timestamp = Date.now();
    dispatcher.dispatch({
        type: 'ADD_MESSAGE',
        message: message
    });
};
