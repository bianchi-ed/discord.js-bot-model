const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Ban a member.')
		.addUserOption(option => option.setName('target-user').setDescription('Target user'))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
	async execute(interaction) {
		//read input
		const user = interaction.options.getMember('target-user');
		
		//ban
		await user.ban().catch(err => {
			interaction.reply({content: "There was an error while running the command"})
		})

		await interaction.reply(`The user ${user} was banned from this channel.`)
	},
};