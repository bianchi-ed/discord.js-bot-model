# Discord.js Bot Model (README.MD in construction)

This is a discord bot template being developed using Node.js v18.16.0 and Discord.js v14. It was created based on the [Discord.js guide](https://discord.js.org/).

The first goal of this project is to study and gain hands-on experience in node.js development and web development in general.

In addition to its primary objective, this project aims to offer a fully functional bot model, enabling you to easily develop your own Discord bot commads, event handlers and more. It contains a modular structure, so you can easily organize and customize the bot to suit different server requirements.

This project contains pre-existing moderation and utility commands constructed using the discord.js SlashCommandBuilder class. These commands not only serve as a starting point for your bot's functionality but can also be easily modified/adapted to create and customize new commands according to your server's specific requirements. The pre-existing commands also serve as a template to create new commands. 

## Pre-Requisites

### - Node & Libs
This project uses Node.js in conjunction with discord.js and axios. It is possible to [Download Node.js from the official website](https://nodejs.org/en/download).

After downloading and installing node.js clone the project and be sure to navigate to the root folder and run the following command to install the necessary dependencies:

```bash
#Run the command on the project's root folder

$ npm install
```

### - Discord Application
The first step to set up the Bot is to create a Discord Application, if you already have a Discord Application created you can skip this sub-topic. 

In case you do not know how to create a Discord Application, I recommend reading this step from the Discord.js Guide: [Setting up a bot application](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot).

### - Invite your Bot (Discord Application) to your discord server
Invite your new (assuming that you just created one) bot to your discrod channel using the invite url present on the Discord Application page. If you do not know what is an invite url, or how to get one, check out this topic from the discord.js guide: [Adding your bot to servers](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links).

## Configuration File
config.json is used to store data that you probably would not like to share. Since the config.json contains sensitive information it is listed on git.ignore. 

The first thing you need to do after the initial Node.js setup is to create a file named **"config.json"** in the root folder of the project and populate it with the following information. this is also a good place to store information such as API keys.

```json
{
	"token": "Your bot Token goes here",
	"clientId": "Your Discord Application application ID goes here",
	"guildId": "This is your Discord server ID "
}
```

You can find your token, applicationId on the discord application page. The guildId is the ID of the Discord server.

## Firing up the Bot
Now that we have finished the basic setup, we can start the bot. To do that, follow the steps:

### - Register bot commands
If you have created a new Discord Application, you should register the commands that comes with this project, locally or globally.

To do that you can simply run the script "deploy-commands.js" present in the root folder of the project.

```base
node deploy-commands.js
```

You can deploy your commands just for one discord server, or to the entire application. The register script present in this project deploys the commands just locally. If you want to deploy your commands to the entire discord application, you can just change the route on the **"deploy-commands.js"** from:

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


**Important:** Everytime you change or create a new command for your bot you should run the script **"deploy-commands.js"** to make sure your command will execute the most recent instruction. It is recommended to create a new script to deploy your commands globally.

### - Start application
To start the bot, you can simply run the command:

```bash
node index.js
```

If everything went well, you should see your bot online on your discord server.

![image](https://github.com/chromeosenjoyer/boten-anna/assets/134458207/bb099016-b987-401b-8c0a-ba5ae924f817)

## Creating new commands
To create a new command you can just create a .js file inside one of the command categories folder, you can also create new category folders if you so choose. In this template we are using the class SlashCommandBuilder to create our commands. Its a very nice way to implement new commands since the class provides various methods to customize and configure commands.

![image](https://github.com/chromeosenjoyer/boten-anna/assets/134458207/c4bf1cf0-ae38-4e8e-8df1-362506132417)

After you have created the .js file, you can write your own instructions. 

This is where you can get creative. The discord.js class SlashCommandBuilder provides a set of methods so you can create very customizable commands. You can find more about the SlashCommand class [in this link from discord.js docs](https://old.discordjs.dev/#/docs/builders/main/class/SlashCommandBuilder).

Here is an example of a command to change the bot's current status on the discord server:

```javascript
const { SlashCommandBuilder, PermissionFlagsBits} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bot-status')
		.setDescription('Set bot status.')
		.addStringOption(option => option
			.setName('status')
			.setDescription('Change the status of the bot.')
			.setRequired(true)
			.addChoices(
				{ name: 'online', value: 'online' },
				{ name: 'idle', value: 'idle' },
				{ name: 'dnd', value: 'dnd' },
				{ name: 'invisible', value: 'invisible' },
			)
		)
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),

	async execute(interaction, client) {
		const status = interaction.options.getString('status')
		try {
			await Promise.all([
				client.user.setStatus(status),
				interaction.reply(`My status is now: ${status}`)
			]);
		} catch (error) {
			console.error('An error occurred:', error);
			await interaction.reply('There was an error during the status change.')
		}
	},
};
```

And here is the execution of the command in the discord server:

1. Call the command

![image](https://github.com/chromeosenjoyer/boten-anna/assets/134458207/49ae416e-649a-4c47-9fcf-ec4d16456c23)


2. Choose parameters

![image](https://github.com/chromeosenjoyer/boten-anna/assets/134458207/610ce904-11bc-4138-a434-13790d91faf7)


![image](https://github.com/chromeosenjoyer/boten-anna/assets/134458207/7c4a0998-523c-42b4-8917-8448ecd2a96d)


3. Press enter

![image](https://github.com/chromeosenjoyer/boten-anna/assets/134458207/9c5d664e-8f51-4fbe-bd74-9c2d44a41d8e)


4. Check bot status

![image](https://github.com/chromeosenjoyer/boten-anna/assets/134458207/ac811e03-76d5-4224-99db-b5890b152910)

## Handling events

Discord.js allows to handle certain events such as a creation of a channel, or the moment when the bot goes online. Check out the entire [list of events from the discord.js docs](https://old.discordjs.dev/#/docs/discord.js/main/typedef/Events)

In this project, similar to commands, you can create individual .js files to handle events. The event files should be created on the "events" folder.

![image](https://github.com/chromeosenjoyer/boten-anna/assets/134458207/3114de45-66ab-4eb3-a59b-cf3abc873308)


Here is an example of an event instruction that triggers when the bot goes online:

```javascript

//ready.js

const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};
```
