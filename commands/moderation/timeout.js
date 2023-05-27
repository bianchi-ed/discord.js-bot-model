const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('timeout')
		.setDescription('Time-out a member.')
		.addUserOption(option => option.setName('target-user').setDescription('Target user'))
		.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
	async execute(interaction) {
		//Fetch user information
		const user = interaction.options.getMember('target-user');
		
		//Time-out target member
		await user.timeout(60_000).catch(err => {
			interaction.reply({content: "There was an error while running the command. Please verify the provided inputs", ephemeral: true})
            return
		})

		await interaction.reply(`The user ${user} was time-outed for 1 minute.`)
	},
};