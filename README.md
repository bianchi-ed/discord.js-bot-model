# discord.js-bot-model

This project aims to provide a modular discord bot structure, allowing convenient organization and customization to meet diverse server needs.

## Usage

### Clone project and install dependencies:

```bash
$ npm install
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
To create a new command just create a new .js file inside one of the command categories folder and write the command instruction, you can also create new category folders if you so choose. This skeleton code is a nice starting point to create a new slash command:

```javascript
const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
    		.setName('command-name') //command name (same name as .js file)
    		.setDescription('command description') //command description
    		.addStringOption(option => option.setName('parameters').setDescription('parameters')) //parameters (use multiple if necessary, they can be of other types)

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
