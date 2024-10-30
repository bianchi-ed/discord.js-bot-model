const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Display info about this server.'),
		
	async execute(interaction) {
		const owner = await interaction.guild.fetchOwner();
		const creationDate = interaction.guild.createdAt.toLocaleDateString();
		const region = interaction.guild.preferredLocale;
		const verificationLevel = interaction.guild.verificationLevel.toString();
		const boostLevel = interaction.guild.premiumTier.toString();
		const roleCount = interaction.guild.roles.cache.size.toString();

		// Create an embed for server info
		const serverInfoEmbed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle(`${interaction.guild.name}`)
			.addFields(
				{ name: 'Server ID', value: interaction.guild.id, inline: false },
				{ name: 'Owner', value: `<@${owner.id}>`, inline: false },
				{ name: 'Total Members', value: interaction.guild.memberCount.toString(), inline: false },
				{ name: 'Region', value: region, inline: false },
				{ name: 'Created On', value: creationDate, inline: false },
				{ name: 'Verification Level', value: verificationLevel, inline: false },
				{ name: 'Boost Level', value: boostLevel, inline: false },
				{ name: 'Role Count', value: roleCount, inline: false },
			);

		await interaction.reply({ embeds: [serverInfoEmbed] });
	},
};
