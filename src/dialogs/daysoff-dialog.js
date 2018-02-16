const { PromptDialog } = require('botfuel-dialog');

class Daysoff extends PromptDialog {}

Daysoff.params = {
  namespace: 'daysoff',
  entities: {
    days: {
      dim: 'number',
    },
    daysofftype: {
      dim: 'hashtag',
    },
  },
};

module.exports = Daysoff;

