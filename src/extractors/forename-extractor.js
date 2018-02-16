const { WsExtractor } = require('botfuel-dialog');

class NameExtractor extends WsExtractor {}

NameExtractor.params = {
  dimensions: ['handle'],
};

module.exports = NameExtractor;
