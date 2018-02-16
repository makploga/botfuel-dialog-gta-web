const { WsExtractor } = require('botfuel-dialog');

class DaysoffExtractor extends WsExtractor {}

DaysoffExtractor.params = {
  dimensions: ['number', 'hashtag'],
};

module.exports = DaysoffExtractor;