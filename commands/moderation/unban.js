const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
    	.setName('unban')
    	.setDescription('Unban a member.')
    	.addUserOption(option => option.setName('target-user').setDescription('Target user'))
    	.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),

  	async execute(interaction) {
    	try {
      		const user = interaction.options.getMember('target-user');
      		const guild = interaction.guild;

      	await Promise.all([
        	guild.members.unban(user),
        	interaction.reply(`The user ${user} was unbanned from this server.`)
      	]);

    	} catch (error) {
      		console.error('An error occurred:', error);
     		await interaction.reply({ content: 'There was an error while running the command.' });
    	}
  	},
};