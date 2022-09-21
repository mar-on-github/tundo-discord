const { Integration, Message, Client} = require("discord.js");
const { ChannelIDs } = require('../config.json');
const { version } = require('../package.json');
module.exports = {
    name: 'ready',
    once: true,
    
    execute(client) {
        tolog = `Ready! Logged in as ${client.user.tag}. Running version ${version}.`;
        console.log(tolog)
        const channelID = ChannelIDs.picolog;
        client.channels.cache.get(channelID).send(tolog);
    },
};