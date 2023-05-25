const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');
const { freeCurrencyApiKey } = require('../../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('currency-exchange')
		.setDescription('get exchange rate for one or more currency')
		.addStringOption(option => option.setName('base-currency').setDescription('The base currency. EX: BRL/USD/EUR').setRequired(true))
		.addStringOption(option => option.setName('currencies-to-compare').setDescription('Currency to compare').setRequired(true)),

	async execute(interaction) {
		try {
			const baseCurrency = interaction.options.getString('base-currency')
			const compareTo = interaction.options.getString('currencies-to-compare')
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