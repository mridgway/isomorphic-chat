var i = 7;

module.exports = function (dispatcher, payload) {
    var message = payload;
    message.id = 'm_' + ++i;
    message.timestamp = Date.now();
    dispatcher.dispatch('ADD_MESSAGE', message);
};
