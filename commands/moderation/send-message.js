const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('send-message')
        .setDescription('Send a message to a specific channel.')
        .addChannelOption(option => option.setName('target-channel').setDescription('Target channel').setRequired(true))
        .addStringOption(option => option.setName('message').setDescription('Message content').setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(interaction) {
        try {
            const targetChannel = interaction.options.getChannel('target-channel');
            const messageContent = interaction.options.getString('message');

            await Promise.all([
                targetChannel.send(messageContent),
                interaction.reply('Message sent successfully.')
            ])

        } catch (error) {
            console.error('An error occurred:', error);
            await interaction.reply({ content: 'There was an error while running the command.' });
        }
    },
};