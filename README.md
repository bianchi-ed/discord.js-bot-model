# Boten Anna (README.MD in construction)

Boten anna is a discord Bot template being developed using node.js in conjunction with discord.js and axios.

The first goal of this project is to study and gain hands-on experience in node.js development and web development in general.

The secondary purpose of this project is to provide a skeleton code for building your own Discord bot. It contains a modular structure, so you can easily organize and customize the bot to suit different server contexts and requirements. The usage of SlashCommandBuilder simplifies the creation and management of commands and events, allowing you to develop new functionalities specifically to your server's context.

This project already contains some commonly used moderation and utility commands, providing a starting point for your bot's functionality and allowing you the freedom to create new commands that integrate into diverse server contexts.

As a study case, I will continue to create new commands that may fit different discord server contexts.

## Pre-Requisites

### - Node & Libs
This project uses Node.js in conjunction with discord.js and axios. It is possible to [Download Node.js from the official website](https://nodejs.org/en/download). Boten Anna is being implemented using Node.js v18.16.0 and  Discord.js v14.

After downloading and installing node.js be sure to install discord.js and axios:

```bash
$ npm install discord.js
```
and

```bash
$ npm install axios
```

### - Discord Application
The first step to set up the Bot is to create a Discord Application, if you already have a Discord Application created you can skip this sub-topic. 

In case you do not know how to create a Discord Application, I recommend reading this step of official Discord.js Guide: [Building your first Discord app](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot).

### - Invite your Bot (Discord Application) to your discord server
Invite your new (assuming that you just created one) bot to your discrod channel using the invite url present on the Discord Application page. If you do not know what is an invite url, or how to get one, please read [this topic from the official discord.js guide](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links).

## Configuration File
config.json is used to store data that you probably would not like to share. 

Since the config.json contains sensitive information it is listed on git.ignore. The first thing you need to do after the initial Node.js setup is to create a file named **"config.json"** in the root folder of the project and populate it with the following information.

```json
{
	"token": "Your bot Token goes here",
	"clientId": "Your Discord Application application ID goes here",
	"guildId": "This is your Discord server ID "
}
```

You can find your token, applicationId on the discord application page. The guildId is the ID of the Discord server.

this is also a good place to store information such as API keys.

## Firing up the Bot
Now that we have finished the basic setup, we can start the bot. To do that, follow the steps:

### - Register bot commands
If you have created a new Discord Application, you should register the commands that comes with boten anna locally, or globally.

To do that you can simply run the script "deploy-commands.js" present in the root folder of the project.

```base
node deploy-commands.js
```

You can deploy your commands just for one discord server, or to the enteire application. The register script present in this project deploys the commands just locally. If you want to deploy your commands to the entire discord application, you can just change the route on the **"deploy-commands.js"** from:

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

 **Important: Command files always should stay inside a category folder, otherwise your bot is not going to start**.

![image](https://github.com/chromeosenjoyer/boten-anna/assets/134458207/beb590fc-d9d7-4276-8b43-056c2f1f0c77)

After you have created the .js file, you can write your own instructions. 

This is where you can get very creative. The discord.js class SlashCommandBuilder provides a set of methods so you can create very customizable commands. You can find more about the SlashCommand class [in this link from discord.js docs](https://old.discordjs.dev/#/docs/builders/main/class/SlashCommandBuilder).

Here is an example of a command to change the bot's current status on the discord server:

```javascript
module.exports = {
	data: new SlashCommandBuilder() 
		.setName('bot-status') // Name that will be used to execute the command on discord (ex: /bot-status)
		.setDescription('Set bot status.') // Description of the command 
		.addStringOption(option => option // Optional String parameter, it can have other types
			.setName('status') // Name of the parameter
			.setDescription('Change the status of the bot.') // Parameter description
			.setRequired(true) //If it is necessary to input this parameter in order to execute the command
			.addChoices( //limite the input to these values:
				{ name: 'online', value: 'online' },
				{ name: 'idle', value: 'idle' },
				{ name: 'dnd', value: 'dnd' },
				{ name: 'invisible', value: 'invisible' },
			)
		)
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers), //Permission necessary to run the command (and see it on the server)

	async execute(interaction, client) { // command instructions
		const status = interaction.options.getString('status'); //read the user input
		try {
			client.user.setStatus(status); //set the new bot status
			await interaction.reply(`My status is now: ${status}`) //send a message to the channel where the command was called
		} catch (error) { //catch errors
			console.error('An error occurred:', error);
			await interaction.reply(`There was an error during the status change.`)
		}
	},
};
```

And here is the execution of the command in the discord server:

![image](https://github.com/chromeosenjoyer/boten-anna/assets/134458207/49ae416e-649a-4c47-9fcf-ec4d16456c23)

![image](https://github.com/chromeosenjoyer/boten-anna/assets/134458207/610ce904-11bc-4138-a434-13790d91faf7)

![image](https://github.com/chromeosenjoyer/boten-anna/assets/134458207/7c4a0998-523c-42b4-8917-8448ecd2a96d)

![image](https://github.com/chromeosenjoyer/boten-anna/assets/134458207/9c5d664e-8f51-4fbe-bd74-9c2d44a41d8e)

![image](https://github.com/chromeosenjoyer/boten-anna/assets/134458207/ac811e03-76d5-4224-99db-b5890b152910)


