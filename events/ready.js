const { ChannelIDs,TundoMoticons } = require('../config.json');
const { version } = require('../package.json');
const { ActivityType } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        tolog = `Ready! Logged in as ${client.user.tag}. Running version ${version}.`;
        client.user.setPresence({ activities: [{ name: `TundoBot by Mar. Running version ${version}.` }], status: 'idle' }, { type: ActivityType.Listening });
        console.log(tolog)
        const channelID = ChannelIDs.tundolog;
        const ReadyEmbed = new EmbedBuilder()
            .setColor('#9C56A2')
            .setTitle(client.user.tag)
            .setAuthor({ name: 'Tundobot', iconURL: 'https://cdn.discordapp.com/avatars/880841911814991892/c8d99aaf2fb914a2af4b28b82e1eed91.webp?size=100', url: 'https://github.com/mar-on-github/tundo-discord' })
            .setDescription(`${TundoMoticons.thumbsup} Ready for duty!`)
            .setThumbnail('https://discord.com/assets/212e30e47232be03033a87dc58edaa95.svg')
            .setImage('https://discord.com/assets/212e30e47232be03033a87dc58edaa95.svg')
            .setTimestamp()
            .setFooter({ text: `TundoBot by Mar. Running version ${version}.`, iconURL: 'https://discord.com/assets/212e30e47232be03033a87dc58edaa95.svg' });

        client.channels.cache.get(channelID).send({ embeds: [ReadyEmbed] });
    },
};