const classifier = require('./classifer');
const pokemon = require('../dao/pokemon');

const titleCase = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
const sendPokemon = async (web, message, pokemonIds) => {
    const pokemonInfo = await Promise.all(pokemonIds.map(pokemon.getByID));
    web.chat.postMessage({
        as_user: true,
        channel: message.channel,
        text: pokemonIds.length > 1
            ? 'Are one of these pokemon who you are looking for?'
            : 'Is this the pokemon you are looking for',
        attachments: pokemonInfo
            .map(pokemon => ({
                title: titleCase(pokemon.name),
                text: `#${pokemon.id}`,
                image_url: pokemon.sprite,
                color: pokemon.color
            }))
    });
};

const mentionRegex = (userId) => {
    // TODO: 8. Return a Regex that will test for a Slack userId
};

const processMessage = (botInfo, rtm, web) => {
    const botMentionRegex = mentionRegex(botInfo.userId);

    return async (message) => {
        // TODO: 9. Prevent processing of messages
        // that do not have an @mention to the Slackbot

        // TODO: 10. Notify Slack that we are processing

        // TODO: 11. Get classifications for the Slack message
        const classifications = [];

        if (classifications.length > 0) {
            await sendPokemon(web, message, classifications);
        } else {
            rtm.sendMessage(`Sorry, I could not find any pokemon that match that description.`, message.channel);
        }
    };
};

module.exports = { processMessage };
