const { WebClient } = require('@slack/web-api');
const { RTMClient } = require('@slack/rtm-api');
const classifier = require('./classifer');
const pokemon = require('../dao/pokemon');
const { processMessage } = require('./process-message');

const createSlackClients = (slackToken) => {
    // TODO: 1. Create RTM and WEB Slack API Clients
    return {
        rtm: new RTMClient(slackToken),
        web: new WebClient(slackToken)
    };
};

const getSlackbotUser = async (web) => {
    // TODO: 2. Authenticate and fetch Slackbot userId and username.
    const { user_id: botUserId } = await web.auth.test();
    const { user: { real_name: botName } } = await web.users.info({ user: botUserId });
    return { userId: botUserId, username: botName };
};

(async () => {
    const { rtm, web } = createSlackClients(process.env.SLACKEDEX_SLACK_TOKEN);
    const botUser = await getSlackbotUser(web);
    const documents = await pokemon.getDocuments();

    // TODO: 3. Train the classifier with the documents for the pokemon.
    await classifier.train(documents);

    // TODO: 4. Listen to the RTM events ready, authenticated, and message
    rtm.on('message', processMessage(botUser, rtm, web));
    rtm.on('authenticated', () => console.log(`Slackbot has authenticated as ${botUser.username}.`));
    rtm.on('ready', () => console.log(`${botUser.username} is ready.`));

    // TODO: 5. Start the RTM Slack API Client
    await rtm.start();
})();
