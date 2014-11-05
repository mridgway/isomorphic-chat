var objectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

function MessageStore() {
    this.messages = [];
}
MessageStore.storeName = 'MessageStore';
MessageStore.handlers = {
    'RECEIVE_MESSAGES': 'onReceiveMessages',
    'ADD_MESSAGE': 'onAddMessage'
};

objectAssign(MessageStore.prototype, EventEmitter.prototype, {
    onAddMessage: function (message) {
        this.messages.push(message);
        this.emitChange();
    },
    onReceiveMessages: function (msgs) {
        this.messages = this.messages.concat(msgs);
        this.emitChange();
    },
    emitChange: function () {
        this.emit('change');
    },
    getAllMessages: function () {
        return this.messages;
    },
    addChangeListener: function (listener) {
        this.on('change', listener);
    },
    removeChangeListener: function (listener) {
        this.removeListener(listener);
    }
});

module.exports = MessageStore;
