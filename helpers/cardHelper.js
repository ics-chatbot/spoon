const { CardFactory, ActionTypes } = require('botbuilder');

class CardHelper {
    /**
    * Get Hero card to get user feedback
    * @param {string} cardTitle Title of the card.
    * @param {Array} prompts A list of suggested prompts.
    */
    static GetHeroCard(cardTitle, prompts){

            var buttons = [];
            prompts.forEach(element => {
                buttons.push({
                    value: element.displayText,
                    type: ActionTypes.ImBack,
                    title: element.displayText
                });
            });
                       
            var heroCard = CardFactory.thumbnailCard(
                'Cloud Enablement and Infrastructure',
                cardTitle,
                ['https://github.com/ics-chatbot/spoon/blob/master/images/cloud-enablement.png'],
                CardFactory.actions(buttons));
            
            return  { attachments: [heroCard] }
        }
}

module.exports.CardHelper = CardHelper;