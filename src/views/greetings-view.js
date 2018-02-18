const { TextView } = require('botfuel-dialog');

class GreetingsView extends TextView {
  getTexts() {
    return ['Bonjour, pourrais je connaitre ton nom? (ex: #Ted, #Laura)'];
  }
}

module.exports = GreetingsView;
