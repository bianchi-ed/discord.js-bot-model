const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Kick a member.')
		.addUserOption(option => option.setName('target-user').setDescription('Target user'))
		.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
	async execute(interaction) {
		//Fetch user information
		const user = interaction.options.getMember('target-user');
		
		//kick target member
		await user.kick().catch(err => {
			interaction.reply({content: "There was an error while running the command", ephemeral: true})
		})

		await interaction.reply(`The user ${user} was kicked from this channel.`)
	},
};