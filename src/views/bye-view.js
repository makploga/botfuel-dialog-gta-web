const { TextView } = require('botfuel-dialog');

class ByeView extends TextView {
  getTexts() {
    return ['A très bientôt pour servir!'];
  }
}

module.exports = ByeView;
