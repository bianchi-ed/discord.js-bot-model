<p align="center">
  <img src="https://github.com/bianchi-ed/discord.js-bot-model/assets/134458207/11e38dd0-6d2a-4cfe-8796-cf7d4e8c780e" alt="Image" style="width: 60%;">
</p>

This is a discord bot template developed using Node.js v18.16.0 and Discord.js v14. It was created based on the [Discord.js guide](https://discord.js.org/).

The project aims to provide a versatile bot template with a modular structure, allowing convenient organization and customization to meet diverse server needs. This helps to effortlessly create new bot commands, integrations, event handlers, and additional functionalities.

It also includes pre-existing moderation and utility commands that may be useful in different discord server contexts.

## Pre-Requisites

### Node & Libs
We are using Node.js in conjunction with discord.js. It is possible to [Download Node.js from the official website](https://nodejs.org/en/download).

Clone the project, and run:

```bash
#Run the command on project's root folder

$ npm install
```

### Create Discord Application
In case you do not know how to create a Discord Application, check out this step from the Discord.js Guide: [Setting up a bot application](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot).

### Invite your Bot (Discord Application) to your discord server
If you do not know what is an invite url, or how to get one, check out this topic from the discord.js guide: [Adding your bot to servers](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links).

### Set config.json
Create a file names "config.json" on the root folder of the project and populate it with the following information.

```json
{	
	"token": "Your bot Token goes here",
	"clientId": "Your Discord Application application ID goes here",
	"guildId": "This is your Discord server ID "
}
```

You can find your token, applicationId on the discord application page. The guildId is the ID of the Discord server.

## Starting the bot

### Register bot commands
Before starting the bot you should register the commands that already come with this model. To do that you can simply run the script "deploy-commands.js" present in the root folder of the project.

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

To:


```javascript
//...

const data = await rest.put(
	Routes.applicationCommands(clientId),
	{ body: commands },
);

//...
```

It is a good idea to create a separated deploy-commands.js to register commands for all discord servers the bot is invited.

### Start application
To start the bot run the following command on the project root folder:

```bash
node index.js
```

## Creating new commands
To create a new command you can just create a new .js file inside one of the command categories folder and write the command instruction, you can also create new category folders if you so choose.

In this template we are using the class SlashCommandBuilder to create our commands. Its a very nice way to implement new commands since the class provides various methods to customize and configure commands. You can find more about the SlashCommand class [in this link from discord.js docs](https://old.discordjs.dev/#/docs/builders/main/class/SlashCommandBuilder).

This skeleton code is a nice starting point to create a new slash command:

```javascript
const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder() //instance slashCommand 
    		.setName('command-name') //command name (same name as .js file)
    		.setDescription('command description') //command description
    		.addStringOption(option => option.setName('parameters').setDescription('parameters')) //parameters (use multiple if necessary, they can be of other types)
    		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator), //permissions required to use the command

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

**Important**: Everytime you change or create a new command you should run the script **"deploy-commands.js"**.

## Events
Similar to commands, you can create individual .js files to handle events, except in this case there are no category folders. The event files should be created on the "events" folder. [Read more about events in this topic from discord.js docs](https://old.discordjs.dev/#/docs/discord.js/main/typedef/Events)
