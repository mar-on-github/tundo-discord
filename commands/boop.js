const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('boop')
		.setDescription('Heh!'),
	async execute(interaction) {
		await interaction.reply('You booped my <:Tundonose:1022585773918277663>??? HEH!');
	},
};
