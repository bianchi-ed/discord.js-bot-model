const { Events, EmbedBuilder } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName);

        if (!command) {
            console.error(`No command matching ${interaction.commandName} was found.`);
            return;
        }

        try {
            // Execute the command
            await command.execute(interaction, interaction.client);

            // Prepare log
            const commandLog = `/${interaction.commandName} ${interaction.options.data.map(option => `${option.name}:${option.value}`).join(' ')}`;
            const timestamp = new Date().toLocaleString(); // Get the current timestamp

            // Find the log channel by name
            const logChannel = interaction.guild.channels.cache.find(channel => channel.name === 'logs');

            // Check if the log channel exists
            if (logChannel) {
                // Create an embed for the log message
                const logEmbed = new EmbedBuilder()
                    .setColor(0x0099FF) // Set the embed color
                    .setTitle(`/${interaction.commandName}`)
                    .addFields(
                        { name: 'User', value: `<@${interaction.user.id}>`, inline: false },
                        { name: 'Used on', value: `<#${interaction.channel.id}>`, inline: false },
                        { name: 'Timestamp', value: timestamp, inline: false },
                        { name: 'Command Line', value: `${commandLog}`, inline: false }
                    );

                // Send the log message as an embed if log channel exists
                await logChannel.send({ embeds: [logEmbed] });
            }

        } catch (error) {
            console.error(`Error executing ${interaction.commandName}`);
            console.error(error);
        }
    },
};
