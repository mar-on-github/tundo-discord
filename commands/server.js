const { SlashCommandBuilder, Guild, Client, userMention, User } = require('discord.js');
const {version} = require ('../package.json');
Invite = "The main invite for my dearest server is https://discord.gg/gBhR2bzzMw";
if (Client.Guild != '853925881411141652') Invite = "Heh... I'm not in my home server.";
if (Client.Guild = '1021885462530494504') Invite = "This is my development server. Please do not invite friends over here.";

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Display info about this server.'),
	async execute(interaction) {
		TheReply = `:name_badge: _Server name_: \`${interaction.guild.name}\`\n:1234: _Total members_: \`${interaction.guild.memberCount}\`\n:point_up: _Picobot version_: \`${version}\`\n\n\n:arrow_forward: ${Invite}`
		return interaction.reply(TheReply);
	},
};