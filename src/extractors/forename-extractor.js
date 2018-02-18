const { WsExtractor } = require('botfuel-dialog');

class NameExtractor extends WsExtractor {}

NameExtractor.params = {
  dimensions: ['hashtag'],
};

module.exports = NameExtractor;
