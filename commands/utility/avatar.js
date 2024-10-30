const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Get the avatar URL from target user')
		.addUserOption(option => option.setName('user').setDescription('Target user')),
		
	async execute(interaction) {
		const user = interaction.options.getUser('user') || interaction.user; 
		const avatarURL = user.displayAvatarURL({ dynamic: true, size: 2048 });

		await interaction.reply(`${avatarURL}`);
	},
};
