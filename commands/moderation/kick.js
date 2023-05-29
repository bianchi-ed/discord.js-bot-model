const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
    	.setName('kick')
    	.setDescription('Kick a member.')
    	.addUserOption(option => option.setName('target-user').setDescription('Target user'))
    	.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

	async execute(interaction) {
		try {
      		const user = interaction.options.getMember('target-user');
      		await Promise.all([
        		user.kick(),
        		interaction.reply(`The user ${user} was kicked from this server.`),
      		]);

    	} catch (error) {
      		console.error('An error occurred:', error)
      		await interaction.reply({ content: 'There was an error while running the command.' })
    	}
  	},
};