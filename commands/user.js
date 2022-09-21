const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('me')
		.setDescription('Display info about yourself.'),
	async execute(interaction) {
		if (interaction.user.id === '718850508135333919') {
			IsItMar = 'My favourite user! <@718850508135333919> has arrived.\n\n';
		} else { IsItMar = '';
	}
		UsualInfo = `:point_right: _Your username:_ \`${interaction.user.username}\` \n :magic_wand: _Your ID:_ \`${interaction.user.id}\` \n :frame_photo: _Your avatar:_ ${interaction.user.displayAvatarURL()}`
		InfoBack = `${IsItMar}${UsualInfo}`
		return interaction.reply(InfoBack);
	},
};