const { ChannelIDs } = require('../config.json');
const { version } = require('../package.json');
module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        tolog = `Ready! Logged in as ${client.user.tag}. Running version ${version}.`;
        client.user.setPresence({ activities: [{ name: `PicoBot by Mar. Running version ${version}.` }], status: 'idle' });
        console.log(tolog)
        const channelID = ChannelIDs.picolog;
        client.channels.cache.get(channelID).send(tolog);
    },
};