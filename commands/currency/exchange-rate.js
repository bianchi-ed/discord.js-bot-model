const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');
const { freeCurrencyApiKey } = require('../../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('exchange-rate')
		.setDescription('Fetch the exchange rate from one currency to another')
		.addStringOption(option => option.setName('from-currency').setDescription('The base currency. EX: BRL').setRequired(true))
		.addStringOption(option => option.setName('to-currency').setDescription('Currency to compare. EX: USD').setRequired(true)),

	async execute(interaction) {
		try {
			const baseCurrency = interaction.options.getString('from-currency').toUpperCase()
			const compareTo = interaction.options.getString('to-currency').toUpperCase()
			const response = await axios.get(`https://api.freecurrencyapi.com/v1/latest?apikey=${freeCurrencyApiKey}&base_currency=${baseCurrency}&currencies=${compareTo}`);

			if (response.status === 200) {
			  // Successful response (status code 200)
			  // Process the data as needed
			  const rate = response.data.data[`${compareTo}`]
			  return interaction.reply(`The exchange rate from ${baseCurrency} to ${compareTo} is: ${rate.toString()}`)

			} else {
			  // Handle other status codes
			  return interaction.reply(`Unexpected status code: ${response.status}`)
			}
		} catch (error) {
			// Error occurred during the request
			console.error(error)
			return interaction.reply('An error occurred while fetching data.')
		}
	}
};