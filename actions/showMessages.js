var messages = require('../data/messages');
var dispatcher = require('../lib/dispatcher');

module.exports = function () {
    dispatcher.dispatch({
        type: 'RECEIVE_MESSAGES',
        messages: messages
    });
};
