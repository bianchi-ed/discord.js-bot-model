# discord.js-bot-model

This project aims to provide a modular discord bot structure.

## Usage

### Clone project and install dependencies:

```bash
$ npm install
```

### Set config.json
Create a file named "config.json" in the root folder of the project and setup it with the following information:

```json
{	
	"token": "bot token",
	"clientId": "Discord client ID (application ID)",
	"guildId": "server id for local command registering"
}
```

### Register bot commands

```base
node deploy-commands.js
```

If you want to deploy your commands to all servers that the bot is invited, you can just change the route on the **"deploy-commands.js"**

from:
```javascript
//...
const data = await rest.put(
	Routes.applicationGuildCommands(clientId, guildId),
	{ body: commands },
);
//...
```

to:
```javascript
//...
const data = await rest.put(
	Routes.applicationCommands(clientId),
	{ body: commands },
);
//...
```

### Start bot

```bash
node index.js
```

## Creating new commands

This template uses the SlashCommandBuilder class. To create a new command, create a new .js file inside one of the command categories folder and write the command instruction, you can also create new category folders to categorize the commands.

This skeleton code is a nice starting point to create a new slash command:

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
Similar to commands, you can create individual .js files to handle events, except in this case there are no category folders.
