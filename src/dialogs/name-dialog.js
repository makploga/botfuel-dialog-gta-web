const { PromptDialog } = require('botfuel-dialog');

class Name extends PromptDialog {}

Name.params = {
  namespace: 'name',
  entities: {
    name: {
      dim: 'hashtag',
    },
  },
};

module.exports = Name;
