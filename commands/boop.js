const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('boop')
		.setDescription('Heh!'),
	async execute(interaction) {
		await interaction.reply('You booped my <:Piconose:1021895471691735071>??? HEH!');
	},
};
