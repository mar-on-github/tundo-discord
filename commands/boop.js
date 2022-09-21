const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('boop')
		.setDescription('Heh!'),
	async execute(interaction) {
		await interaction.reply('You booped my <:Piconose:1021897639085752512>??? HEH!');
	},
};
