# discord.js-bot-model

This project aims to provide a modular discord bot structure, allowing convenient organization and customization to meet diverse server needs.

## Usage

### Clone project and install dependencies:

```bash
$ npm install
```
### Config.json file
Create config.json file and set it with the following information: 

```json
{
	"token": "discord.dev bot token",
    "clientId": "discord.dev clientID (I believe its refered as application id as well in some of the discord.dev pages)",
    "guildId": "Your discord server. Used to register commands to a single server"
}
```
### Register commands

```base
node deploy-commands.js
```

To deploy your commands to all servers that the bot is invited, you can just change the route in **"deploy-commands.js"** from:
```javascript
//...
const data = await rest.put(
	Routes.applicationGuildCommands(clientId, guildId),
	{ body: commands },
);
//...
```

To:
```javascript
//...
const data = await rest.put(
	Routes.applicationCommands(clientId),
	{ body: commands },
);
//...
```

### Start application

```bash
node index.js
```

## Creating new commands

To create a new command create a .js file inside one of the command category folders. SlashcommandBuilder provides a nice structure for commands and in my opinion it is the best way to interact with bots. I recommend reading more about this topic to check all the options you can use. Only the command name and the description are mandatory fields. 

Here is a simple skeleton code for a new command. I have implemented a few different simple commands to show some of the possibilities as well. 

```javascript
const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
    		.setName('command-name') //command name (same name as .js file)
    		.setDescription('command description') //command description

	async execute(interaction) {
		try {

            		//some logic here

    		} catch (error) { // Catch errors
      			console.error('An error occurred:', error)
      			await interaction.reply({ content: 'There was an error while running the command.' })
    		}
  	},
};
```

## Events
Similar to commands, you can create individual .js files to handle events, except in this case there are no category folders. The event files should be created on the "events" folder. [Read more about events in this topic from discord.js docs](https://old.discordjs.dev/#/docs/discord.js/main/typedef/Events)
