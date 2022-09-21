const { Integration, Message, Client} = require("discord.js");
const { ChannelIDs } = require('../config.json');
module.exports = {
    name: 'ready',
    once: true,
    
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
        const channelID = ChannelIDs.picolog;
        client.channels.cache.get(channelID).send(`Ready! Logged in as ${client.user.tag}`);
    },
};