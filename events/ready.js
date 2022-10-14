const { ChannelIDs } = require('../config.json');
const { version } = require('../package.json');
const { ActivityType } = require('discord.js');
module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        tolog = `Ready! Logged in as ${client.user.tag}. Running version ${version}.`;
        client.user.setPresence({ activities: [{ name: `TundoBot by Mar. Running version ${version}.` }], status: 'idle' }, { type: ActivityType.Listening });
        console.log(tolog)
        const channelID = ChannelIDs.tundolog;
        client.channels.cache.get(channelID).send(tolog);
    },
};