const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('report')
        .setDescription('Report a user to the mods.')
        .addUserOption(option => option.setName('user').setDescription('The user you report.').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('What did this user do and when?').setRequired(true))
        .addAttachmentOption(option => option.setName('screenshot').setDescription('Evidence, or something that shows us there is something wrong.').setRequired(false)),
        
    async execute(interaction) {
        const user = interaction.options.getUser('target');
        if (user) return(
            interaction.reply(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`)
            )
        interaction.user
    },
};