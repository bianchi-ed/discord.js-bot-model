const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Ban a member.')
		.addUserOption(option => option.setName('target-user').setDescription('Target user'))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),

	async execute(interaction) {
		try {
			const user = interaction.options.getMember('target-user')
			await Promise.all([
				user.ban(),
				interaction.reply(`The user ${user} was banned from this server.`)
			]);	

		}catch (error) {
			console.error('An error occurred:', error)
			await interaction.reply({ content: 'There was an error while running the command.' })
		}
	},
};