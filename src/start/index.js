const { WebClient } = require('@slack/web-api');
const { RTMClient } = require('@slack/rtm-api');
const classifier = require('./classifer');
const pokemon = require('../dao/pokemon');
const { processMessage } = require('./process-message');


const createSlackClients = (slackToken) => {
    // TODO: 1. Create RTM and WEB Slack API Clients
    return {};
};

const getSlackbotUser = async (web) => {
    // TODO: 2. Authenticate and fetch Slackbot userId and username.
    return {};
};

(async () => {
    const { rtm, web } = createSlackClients(process.env.SLACKEDEX_SLACK_TOKEN);
    const botUser = await getSlackbotUser(web);
    const documents = await pokemon.getDocuments();

    // TODO: 3. Train the classifier with the documents for the pokemon.

    // TODO: 4. Listen to the RTM events ready, authenticated, and message

    // TODO: 5. Start the RTM Slack API Client
})();
