function makeLowerCase(value) {
    return value.toString().toLowerCase();
}
const { ChannelIDs } = require('../config.json');

module.exports = {
    name: 'messageCreate',
    once: false,
    execute(message) {
        if (makeLowerCase(message).includes('discord.gg')) {
            message.reply('Hi there! Looking for a partnership? Contact our staff \(\<@&966969999644319786\>\) please!')
            // console.log(`**Category: Selfpromo**\n\n\n ${message.author.tag} sent \`${message}\`in \<#${message.channel.id}\>`);
        }
        if (makeLowerCase(message).includes('/boop')) {
            if ((message.channel.id) = (ChannelIDs.general))
            message.reply('You can\'t boop me here!')
        }
        if (makeLowerCase(message).includes('pico')) {
            message.reply("That's my name!")
        }
        // console.log(`${message.author.tag} sent \`${message}\`in #${message.channel.name}`);
    },
};
