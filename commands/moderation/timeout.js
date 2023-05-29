const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
    	.setName('timeout')
    	.setDescription('Time-out a member.')
    	.addUserOption(option => option.setName('target-user').setDescription('Target user'))
    	.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),

  	async execute(interaction) {
    	try {
      		const user = interaction.options.getMember('target-user');

      	await Promise.all([
        	user.timeout(60_000),
        	interaction.reply(`The user ${user} was timed out for 1 minute.`)
      	]);
    	} catch (error) {
      		console.error('An error occurred:', error);
      		await interaction.reply({ content: 'There was an error while running the command. Please verify the provided inputs.' });
    	}
  	},
};