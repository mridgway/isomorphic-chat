var React = require('react');
var addMessage = require('../actions/addMessage');

var AttentionButton = React.createClass({
    onClick: function () {
        addMessage(this.props.dispatcher, {
            authorName: 'Mike',
            text: 'Look at me!'
        });
    },
    render: function () {
        return (
            <button onClick={this.onClick}>Demand Attention</button>
        );
    }
});

module.exports = AttentionButton;
