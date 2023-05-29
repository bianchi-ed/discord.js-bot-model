const { SlashCommandBuilder, PermissionFlagsBits, ActivityType } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bot-activity')
		.setDescription('Set bot activity.')
		.addStringOption(option => option
			.setName('activity')
			.setDescription('Current activity.')
			.setRequired(true)
            .addChoices(
				{ name: 'Watching', value: 'Watching' },
				{ name: 'Playing', value: 'Playing' },
				{ name: 'Streaming', value: 'Streaming' },
				{ name: 'Listening', value: 'Listening' },
                { name: 'Competing', value: 'Competing' },
			)
		)
		.addStringOption(option => option
			.setName('title')
			.setDescription('What are you Streaming/Playing/Listening.')
			.setRequired(true)
		)
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

	async execute(interaction, client) {
		const activity = interaction.options.getString('activity')
        const title = interaction.options.getString('title')
        var typeActivity
        
        //this looks weird, change to a activity map and iterate later
        try {
            switch (activity) {
                case "Watching":
                    typeActivity = ActivityType.Watching
                    break;

                case "Playing":
                    typeActivity = ActivityType.Playing
                    break;

                case "Streaming":
                    typeActivity = ActivityType.Streaming
                    break;

                 case "Listening":
                    typeActivity = ActivityType.Listening
                    break;

                case "Competing":
                    typeActivity = ActivityType.Competing
                    break;
            
                default:
                    break;
            }

            await Promise.all([
				client.user.setActivity(title, { type: typeActivity }),
				interaction.reply(`My activity was changed. I am now ${activity}: ${title}`)
			]);	
            
		} catch (error) {
            console.log(error)
			await interaction.reply(`There was an error while changing the bot activity`)
		}
	},
};