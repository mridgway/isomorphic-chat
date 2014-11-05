var React = require('react');

var Message = React.createClass({
    render: function () {
        var message = this.props.message;
        return (
            <p><strong>{message.authorName}</strong>: {message.text}</p>
        );
    }
});

module.exports = Message;
