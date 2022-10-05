function makeLowerCase(value) {
    return value.toString().toLowerCase();
}
const { Client, GatewayIntentBits} = require('discord.js');
const { ChannelIDs } = require('../config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessageTyping] });
module.exports = {
    name: 'messageCreate',
    once: false,
    execute(message) {
        if (makeLowerCase(message).includes('discord.gg')) {
            if ((message.channel.id) != (ChannelIDs.selfpromo)) {
                if ((message.channel.id) != (ChannelIDs.partners)) {
            message.reply('Hi there! Looking for a partnership? Contact our staff \(\<@&966969999644319786\>\) please!')
            // console.log(`**Category: Selfpromo**\n\n\n ${message.author.tag} sent \`${message}\`in \<#${message.channel.id}\>`);
            }}
        }
        if (makeLowerCase(message).includes('/boop')) {
            if ((message.channel.id) = (ChannelIDs.general)) {
            message.reply('You can\'t boop me here!')
            }
        }
        if (makeLowerCase(message).includes('pico')) {
            if ((message.channel.id) != (ChannelIDs.selfpromo)) {
                if ((message.channel.id) != (ChannelIDs.partners)) {
                    if (Math.random() < 0.3) {
                    message.reply("That's my name!")
                    }
                }
            }
        }
        // console.log(`${message.author.tag} sent \`${message}\`in #${message.channel.name}`);
    },
};
