var dispatcher = require('../lib/dispatcher');
var superagent = require('superagent');

module.exports = function (payload, done) {
    superagent
        .get('https://rawgit.com/mridgway/10be75846faa22eb6e22/raw/')
        .set('Accept', 'application/json')
        .end(function (res) {
            var messages = JSON.parse(res.text);
            dispatcher.dispatch({
                type: 'RECEIVE_MESSAGES',
                messages: messages
            });
            done();
        });
};
