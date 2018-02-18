const { TextView } = require('botfuel-dialog');

class ThanksView extends TextView {
  getTexts() {
    return ['De rien! avec plaisir'];
  }
}

module.exports = ThanksView;
