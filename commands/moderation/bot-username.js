const { SlashCommandBuilder, PermissionFlagsBits} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bot-username')
		.setDescription('Change bot username.')
		.addStringOption(option => option
			.setName('name')
			.setDescription('New bot name.')
			.setRequired(true)
		)
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),

	async execute(interaction, client) {
		const name = interaction.options.getString('name')
		try {
			await Promise.all([
				client.user.setUsername(name),
				interaction.reply(`My name was changed.`)
			]);	
			
		} catch (error) {
			await interaction.reply(`There was an error while changing the bot name`)
		}
	},
};