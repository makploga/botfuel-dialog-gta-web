const { PromptView, BotTextMessage } = require('botfuel-dialog');

class NameView extends PromptView {
  renderEntities(matchedEntities) {
    const name = matchedEntities.name && matchedEntities.name.values[0].value;

    if (name) {
      const [firstLetter, ...letters] = name;
      const capitalizedName = `${firstLetter.toUpperCase()}${letters.join('')}`;

      return [
        new BotTextMessage(`${capitalizedName}! Que puis-je pour toi ?`),
      ];
    }

    return [new BotTextMessage('Désolé, je ne comprends!')];
  }
}

module.exports = NameView;
