# Discord.js Bot Model

This is a discord bot template being developed using Node.js v18.16.0 and Discord.js v14. It was created based on the [Discord.js guide](https://discord.js.org/).

This project aims to offer a customizable discord bot, enabling you to easily develop your own bot commads, integrations, event handlers and more. It contains a modular structure, so you can easily organize and customize the bot to suit different server requirements.

This project contains pre-existing moderation and utility commands constructed using the discord.js SlashCommandBuilder class.

## Pre-Requisites

### - Node & Libs
We are using Node.js in conjunction with discord.js. It is possible to [Download Node.js from the official website](https://nodejs.org/en/download).

After downloading and installing node.js, clone the project, navigate to the root folder and run the following command to install the necessary dependencies:

```bash
#Run the command on the project's root folder

$ npm install
```

### - Discord Application
In case you do not know how to create a Discord Application, check out this step from the Discord.js Guide: [Setting up a bot application](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot).

### - Invite your Bot (Discord Application) to your discord server
If you do not know what is an invite url, or how to get one, check out this topic from the discord.js guide: [Adding your bot to servers](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links).

### - Set config.json
Create a file names "config.json" on the root folder of the project and populate it with the following information.

```json
{	
	"token": "Your bot Token goes here",
	"clientId": "Your Discord Application application ID goes here",
	"guildId": "This is your Discord server ID "
}
```

You can find your token, applicationId on the discord application page. The guildId is the ID of the Discord server.

## Firing up the Bot

### - Register bot commands
Before starting the bot you should register the commands that already come with this model. To do that you can simply run the script "deploy-commands.js" present in the root folder of the project.

```base
node deploy-commands.js
```

If you want to deploy your commands to all servers that the bot is invited, you can just change the route on the **"deploy-commands.js"** from:

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

// It is a good idea to create a separated deploy-commands.js to deploy your commands globally
const data = await rest.put(
	Routes.applicationCommands(clientId),
	{ body: commands },
);

//...
```

### - Start application
To start the bot run the following command on the project root folder:

```bash
node index.js
```

## Creating new commands
To create a new command you can just create a new .js file inside one of the command categories folder and write the command instruction, you can also create new category folders if you so choose.

In this template we are using the class SlashCommandBuilder to create our commands. Its a very nice way to implement new commands since the class provides various methods to customize and configure commands. You can find more about the SlashCommand class [in this link from discord.js docs](https://old.discordjs.dev/#/docs/builders/main/class/SlashCommandBuilder).

This skeleton code is a good start for a new slash command:

```javascript
const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
    		.setName('command-name') // This will be the name used to execute the command. i.e /command-name
    		.setDescription('Command description') // This description will appear when the command is called
    		.add<Options>Option(option => option.setName('<option-name>').setDescription('<option-description>').setRequired(true|false)) // Add more options of different types if needed
    		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator), // Permission required to execute (and see) the command
  	async execute(interaction) {
    		try {
      			// Retrieve options from interaction and other necessary data if needed
      			const optionValue = interaction.options.<getOptionType>('option-name');
			
      			// Perform some command logic

      			// Send a reply or perform other actions based on the command logic
			interaction.reply(`The command was executed`)
    		} catch (error) {
      			console.error('An error occurred:', error);
      			await interaction.reply({ content: 'There was an error while running the command.' });
    		}
  	},
};
```

**Important**: Everytime you change or create a new command for your bot you should run the script **"deploy-commands.js"** to make sure your command will execute the most recent instruction. It is recommended to create a new script to deploy your commands globally.

## Events
Similar to commands, you can create individual .js files to handle events, except that there are no category folders this time. The event files should be created on the "events" folder. [Read more about events in this topic from discord.js docs](https://old.discordjs.dev/#/docs/discord.js/main/typedef/Events)
