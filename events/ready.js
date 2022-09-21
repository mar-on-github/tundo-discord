const { Integration, Message, Client} = require("discord.js");
// Picolog
function picolog(item) {
    const { ChannelIDs } = require('../config.json');
    const channelID = ChannelIDs.picolog;
    client.channels.cache.get(channelID).send(item);
    console.log(item);
}
module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        picolog(`Ready! Logged in as ${client.user.tag}`);
    },
};