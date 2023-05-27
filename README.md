# Boten Anna (README.MD in construction)

Boten Anna is a Discord Bot being developed using node.js in conjunction with discord.js and axios.

The first goal of this project is to study and gain hands-on experience in node.js development and web development in general.

The second goal is to present a user-friendly and customizable Discord Bot Blue-Print that includes fundamental moderation and utility commands. Additionally, it features a dynamic folder structure, which promotes better organization of commands and events for enhanced usability. Furthermore, this blueprint provides an environment that simplifies the implementation and maintenance of new commands, ensuring ease of adaptability.

Boten Anna is being implemented using Node.js v18.16.0 and  Discord.js v14.

## Table of Contents
- [Pre-Requisites](#Pre-Requisites)
- [config.json](#config.json)
- [Execution](#Execution)
- [Usage](#Commands)

## Pre-Requisites

### Node & Libs
This project uses Node.js in conjunction with discord.js and axios. It is possible to [Download Node.js from the official website](https://nodejs.org/en/download)

After downloading and installing node.js be sure to run the following commands:

```bash
$ npm install discord.js
```
and

```bash
$ npm install axios
```

### Discord Application
The first step to set up the Bot is to create a Discord Application, if you already have a Discord Application created you can skip this sub-topic. 

In case you dont know how to create a Discord Application, I recommend reading this step of official Discord.js Guide: [Building your first Discord app](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot).

## config.json
Config.json is used to store data that you probably would not like to share. 

Since the config.json contains sensitive information, it is listed on git.ignore. The first thing you need should do after the initial Node.js setup is to create a file named "config.json" in the root folder of the project and populate it with the following information.

```json
{
	"token": "Your bot Token goes here",
	"clientId": "Your application application ID goes here",
	"guildId": "This is your server ID "
}
```

You can find your token, applicationId on the discord application page. The guildId is the ID of the Discord server.

Feel free to add more data to this file. It is a good place to store information such as API keys.

## Execution
TOPIC

[Execution]

## Usage

[Usage]
