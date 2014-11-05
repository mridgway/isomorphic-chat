var dispatcher = require('../lib/dispatcher');
var objectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var messages = [];
var MessageStore = objectAssign({}, EventEmitter.prototype, {
    onAddMessage: function (message) {
        messages.push(message);
        MessageStore.emitChange();
    },
    onReceiveMessages: function (msgs) {
        messages = messages.concat(msgs);
        MessageStore.emitChange();
    },
    emitChange: function () {
        MessageStore.emit('change');
    },
    getAllMessages: function () {
        return messages;
    },
    addChangeListener: function (listener) {
        MessageStore.on('change', listener);
    },
    removeChangeListener: function (listener) {
        MessageStore.removeListener(listener);
    }
});

dispatcher.register(function (payload) {
    switch (payload.type) {
        case 'RECEIVE_MESSAGES':
            MessageStore.onReceiveMessages(payload.messages);
            return;
        case 'ADD_MESSAGE':
            MessageStore.onAddMessage(payload.message);
            return;
        default:
            throw new Error('No handler found');
    }
});

module.exports = MessageStore;
