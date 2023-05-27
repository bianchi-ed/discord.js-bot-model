# Boten Anna (README.MD in construction)

Boten anna is a discord Bot model being developed using node.js in conjunction with discord.js and axios.

The first goal of this project is to study and gain hands-on experience in node.js development and web development in general.

The second goal is to present a customizable Discord Bot model that includes fundamental moderation and utility commands. Additionally, it features a dynamic folder structure, which promotes better organization of commands and events for enhanced usability. This model also creates a workspace that simplifies the implementation and maintenance of new commands, ensuring ease of adaptability.

## Table of Contents
- [Pre-Requisites](#Pre-Requisites)
- [config.json](#config.json)
- [Execution](#Execution)
- [Usage](#Commands)

## Pre-Requisites

### Node & Libs
This project uses Node.js in conjunction with discord.js and axios. It is possible to [Download Node.js from the official website](https://nodejs.org/en/download). Boten Anna is being implemented using Node.js v18.16.0 and  Discord.js v14.

After downloading and installing node.js be sure to install discord.js and axios:

```bash
$ npm install discord.js
```
and

```bash
$ npm install axios
```

### Discord Application
The first step to set up the Bot is to create a Discord Application, if you already have a Discord Application created you can skip this sub-topic. 

In case you do not know how to create a Discord Application, I recommend reading this step of official Discord.js Guide: [Building your first Discord app](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot).

### Invite your Bot (Discord Application) to your channel
Invite your new (assuming that you just created one) bot to your channel using the invite url present on the Discord Application page. If you do not know what is an invite url, or how to get one, please read [this topic from the official discord.js guide](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links).

## config.json
Config.json is used to store data that you probably would not like to share. 

Since the config.json contains sensitive information it is listed on git.ignore. The first thing you need to do after the initial Node.js setup is to create a file named **"config.json"** in the root folder of the project and populate it with the following information.

```json
{
	"token": "Your bot Token goes here",
	"clientId": "Your Discord Application application ID goes here",
	"guildId": "This is your Discord server ID "
}
```

You can find your token, applicationId on the discord application page. The guildId is the ID of the Discord server.

Feel free to add more data to this file. It is a good place to store information such as API keys.

## Firing up the Bot
Now that we have finished the basic setup, we can start the bot. To do that, follow the steps:

### 1. Register the commands into the discord server locally
If you have created a new Discord Application, you should register the commands that comes with boten anna locally, or globally.

To do that you can simply run the script "deploy-commands.js" present in the root folder of the project.

![image](https://github.com/chromeosenjoyer/boten-anna/assets/134458207/aa350dbc-8f6f-4bbb-ba4c-24be2f0a62fe)

You can deploy your commands just for a discord server, or to the entire application. By default the current register script deploys the commands just locally. If you want to deploy your commands to the entire Discord Application, you can just change the route on the **"deploy-commands.js"** from:

![image](https://github.com/chromeosenjoyer/boten-anna/assets/134458207/a468c0f2-7481-4efb-a710-cc36fc51f1c1)

To:

![image](https://github.com/chromeosenjoyer/boten-anna/assets/134458207/62f2ab5e-b0bf-4866-ae55-a8ed2e292196)


**Important:** Everytime you change or create a new command for your bot you should run the script **"deploy-commands.js"** to make sure your command will execute the most recent instruction. It is recommended to create a new script to deploy your commands globally.

### 2. Start application
To start the bot, you can simply run the command "node index.js"

![image](https://github.com/chromeosenjoyer/boten-anna/assets/134458207/c4abb15f-29e7-4c91-aed4-a949662e3699)

If everything went well, you should see your bot online in your server.

![image](https://github.com/chromeosenjoyer/boten-anna/assets/134458207/bb099016-b987-401b-8c0a-ba5ae924f817)


## Usage

[Usage]
