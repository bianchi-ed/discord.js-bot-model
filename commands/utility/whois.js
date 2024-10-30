const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('whois')
		.setDescription('Provides information about a user.')
		.addUserOption(option => 
			option.setName('user')
				.setDescription('The user to get information about')
				.setRequired(true)),

	async execute(interaction) {
		const targetUser = interaction.options.getUser('user'); 
		const targetMember = interaction.guild.members.cache.get(targetUser.id);
		const avatarURL = targetUser.displayAvatarURL({ dynamic: true, size: 2048 });
		const roles = targetMember.roles.cache.map(role => role.name).join(', ') || 'No roles';
		const accountCreated = targetUser.createdAt.toLocaleDateString();
		const joinedDate = targetMember.joinedAt.toLocaleDateString();

		// Create an embed for user info
		const userInfoEmbed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setThumbnail(avatarURL)
			.addFields(
				{ name: 'User Profile', value: `<@${targetUser.id}>`, inline: false },
				{ name: 'User ID', value: targetUser.id, inline: false },
				{ name: 'User Tag', value: `${targetUser.username}#${targetUser.discriminator}`, inline: false },
				{ name: 'Joined Server On', value: joinedDate, inline: false },
				{ name: 'Account Created On', value: accountCreated, inline: false },
				{ name: 'Roles', value: roles, inline: false }
			);

		await interaction.reply({ embeds: [userInfoEmbed] });
	},
};
