const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
    	.setName('grant-role')
    	.setDescription('Grante a specific role to target member.')
    	.addUserOption(option => option.setName('target-user').setDescription('Target user').setRequired(true))
		.addRoleOption(option => option.setName('target-role').setDescription('Target role').setRequired(true))
    	.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

	async execute(interaction) {
		try {
      		const user = interaction.options.getMember('target-user')
			const role = interaction.options.getRole('target-role');
      		await Promise.all([
        		user.roles.add(role),
        		interaction.reply(`The role ${role} was granted to ${user}.`),
      		]);

    	} catch (error) {
      		console.error('An error occurred:', error)
      		await interaction.reply({ content: 'There was an error while running the command.' })
    	}
  	},
};