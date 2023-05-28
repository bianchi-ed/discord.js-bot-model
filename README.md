# Boten Anna (README.MD in construction)

Boten anna is a discord Bot template being developed using node.js in conjunction with discord.js and axios.

The first goal of this project is to study and gain hands-on experience in node.js development and web development in general.

The secondary purpose of this project is to provide a versatile and well-structured skeleton code for building your own Discord bot. With a modular architecture, you can easily organize and customize the bot to suit different server contexts and requirements. The provided command model simplifies the creation and management of commands, allowing you to develop new functionalities tailored specifically to your server's needs.

This model already includes some commonly used moderation and utility commands, providing a starting point for your bot's functionality and allowing you the freedom to create new commands that integrate into diverse server contexts.

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

## Bot Usage
In this project we are using the class SlashCommandBuilder to create our commands. Its a very nice way to implement new commands since the class provides various methods to customize and configure our commads. It is very well presented on discord as you can see here:

![image](https://github.com/chromeosenjoyer/boten-anna/assets/134458207/4aa5cb19-cf83-4862-86a5-b801b5b245d5)

![image](https://github.com/chromeosenjoyer/boten-anna/assets/134458207/7f043691-ec0a-4f64-b346-d38626625019)

![image](https://github.com/chromeosenjoyer/boten-anna/assets/134458207/421024e1-7c57-4c15-b5c0-af17fc9752bf)

![image](https://github.com/chromeosenjoyer/boten-anna/assets/134458207/0ec0133e-6ee9-4c98-ba51-c2925d9d1f70)
