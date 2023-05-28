const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('unban')
		.setDescription('Unban a member.')
		.addUserOption(option => option.setName('target-user').setDescription('Target user'))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
	async execute(interaction) {
		//read input
		const user = interaction.options.getMember('target-user')
		
        //acess guild object
        const guild = interaction.guild

		//Unban
		await guild.members.unban(user).catch(err => {
			interaction.reply({content: "There was an error while running the command"})
		})

		await interaction.reply(`The user ${user} was unbanned from this channel.`)
	},
};