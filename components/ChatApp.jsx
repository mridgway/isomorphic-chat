var React = require('react');
var Message = require('./Message.jsx');
var AttentionButton = require('./AttentionButton.jsx');
var MessageStore = require('../stores/MessageStore');

var ChatApp = React.createClass({
    getInitialState: function () {
        return {
            messages: this.props.dispatcher.getStore(MessageStore).getAllMessages()
        }
    },
    onChange: function () {
        this.setState(this.getInitialState());
    },
    componentDidMount: function () {
        this.props.dispatcher.getStore(MessageStore).addChangeListener(this.onChange);
    },
    componentWillUnmount: function () {
        this.props.dispatcher.getStore(MessageStore).removeChangeListener(this.onChange);
    },
    render: function () {
        var dispatcher = this.props.dispatcher;
        var messages = this.state.messages.map(function (message) {
            return <Message message={message} key={message.id} />
        });
        return (
            <div className="messages">
                {messages}
                <AttentionButton dispatcher={dispatcher} />
            </div>
        );
    }

});

module.exports = ChatApp;
