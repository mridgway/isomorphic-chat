var superagent = require('superagent');

module.exports = function (dispatcher, payload, done) {
    superagent
        .get('https://rawgit.com/mridgway/10be75846faa22eb6e22/raw/')
        .set('Accept', 'application/json')
        .end(function (res) {
            var messages = JSON.parse(res.text);
            dispatcher.dispatch('RECEIVE_MESSAGES', messages);
            done();
        });
};
