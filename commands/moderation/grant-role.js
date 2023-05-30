const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
    	.setName('grant-role')
    	.setDescription('Grante a specific role to target member.')
		.addRoleOption(option => option.setName('target-role').setDescription('Target role').setRequired(true))
    	.addUserOption(option => option.setName('target-user').setDescription('Target user').setRequired(true))
    	.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

	async execute(interaction) {
		try {
      		const user = interaction.options.getMember('target-user')
			const targetRole = interaction.options.getRole('target-role');

			if (!user.roles.cache.has(targetRole.id)) {
				await Promise.all([
					user.roles.add(targetRole),
					interaction.reply(`The role ${targetRole} was granted to ${user}.`),
				]);
			}else{
				await interaction.reply(`The user ${user} already has have the role: ${targetRole}.`)
			}

    	} catch (error) {
      		console.error('An error occurred:', error)
      		await interaction.reply({ content: 'There was an error while running the command.' })
    	}
  	},
};