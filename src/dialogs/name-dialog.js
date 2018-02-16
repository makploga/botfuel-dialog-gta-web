const { PromptDialog } = require('botfuel-dialog');

class Name extends PromptDialog {}

Name.params = {
  namespace: 'name',
  entities: {
    name: {
      dim: 'handle',
    },
  },
};

module.exports = Name;
