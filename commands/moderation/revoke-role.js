const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
    	.setName('revoke-role')
    	.setDescription('Revoke a specific role by its name from target user.')
		.addRoleOption(option => option.setName('target-role').setDescription('Target role').setRequired(true))
    	.addUserOption(option => option.setName('target-user').setDescription('Target user').setRequired(true))
    	.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

	async execute(interaction) {
		try {
      		const user = interaction.options.getMember('target-user')
			const targetRole = interaction.options.getRole('target-role');

			if (user.roles.cache.has(targetRole.id)) {
	
				await Promise.all([
					user.roles.remove(targetRole),
					interaction.reply(`The role ${targetRole} was revoked from ${user}.`),
				]);

			}else{
				await interaction.reply(`The user ${user} does not have the role: ${targetRole}.`)
			}
    	} catch (error) {
      		console.error('An error occurred:', error)
      		await interaction.reply({ content: 'There was an error while running the command.' })
    	}
  	},
};