var React = require('react');
var Message = require('./Message.jsx');
var AttentionButton = require('./AttentionButton.jsx');
var MessageStore = require('../stores/MessageStore');

var ChatApp = React.createClass({
    getInitialState: function () {
        return {
            messages: MessageStore.getAllMessages()
        }
    },
    onChange: function () {
        this.setState(this.getInitialState());
    },
    componentDidMount: function () {
        MessageStore.addChangeListener(this.onChange);
    },
    componentWillUnmount: function () {
        MessageStore.removeChangeListener(this.onChange);
    },
    render: function () {
        var messages = this.state.messages.map(function (message) {
            return <Message message={message} key={message.id} />
        });
        return (
            <div className="messages">
                {messages}
                <AttentionButton />
            </div>
        );
    }

});

module.exports = ChatApp;
