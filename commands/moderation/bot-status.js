const { SlashCommandBuilder, PermissionFlagsBits} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bot-status')
		.setDescription('Set bot status.')
		.addStringOption(option => option
			.setName('status')
			.setDescription('Change the status of the bot.')
			.setRequired(true)
			.addChoices(
				{ name: 'online', value: 'online' },
				{ name: 'idle', value: 'idle' },
				{ name: 'dnd', value: 'dnd' },
				{ name: 'invisible', value: 'invisible' },
			)
		)
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),

	async execute(interaction, client) {
		const status = interaction.options.getString('status')
		try {
			await Promise.all([
				client.user.setStatus(status),
				interaction.reply(`My status is now: ${status}`)
			]);
		} catch (error) {
			console.error('An error occurred:', error);
			await interaction.reply('There was an error during the status change.')
		}
	},
};