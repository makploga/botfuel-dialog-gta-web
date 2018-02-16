const { PromptView, BotTextMessage } = require('botfuel-dialog');

class DaysoffView extends PromptView {
  renderEntities(matchedEntities) {
    const days =
      matchedEntities.days &&
      matchedEntities.days.values[0].value;

	const daysofftype =
      matchedEntities.daysofftype &&
      matchedEntities.daysofftype.values[0].value;     

    if (!daysofftype) {
      return [new BotTextMessage('Quel type de congé : #RTT (5 jours restant) ou #CP (17 jours restant) ?')];
    }
    if (!days) {
      return [new BotTextMessage('Combien de jours voulez vous ?')];
    }
    if (daysofftype == '#RTT' && !days > 5) {
      return [new BotTextMessage(`Combien de jours voulez vous ? ${days} demandé mais vous ne pouvez prendre que 5 jours de ${daysofftype}`)];
    }

    if (daysofftype == '#CP' && !days > 17) {
      return [new BotTextMessage(`Combien de jours voulez vous ? ${days} demandé mais vous ne pouvez prendre que 17 jours de ${daysofftype}`)];
    }

    return [new BotTextMessage(`${days} jour c'est un peut beaucoup non.`)];
  }
}

module.exports = DaysoffView;

