# Boten Anna (Readme.me in construction)

Boten Anna is a Discord Bot being developed using node.js in conjunction with discord.js and axios.

The primary goal of this project is to learn and gain hands-on experience in node.js development and web development in general.

In addition, Boten Anna aims to leverage various APIs and provide features for data retrieval, Discord server management, entertainment, and more.

## Table of Contents
- [Pre-Requisites](#Pre-Requisites)
- [config.json](#config.json)
- [Execution](#Execution)
- [Usage](#Commands)

## Pre-Requisites

This project is currently not deployed anywhere, so creating a discord bot app will be necessary if you choose to run it. In case you are not sure how to do this, I strongly recommend reading at least this step of official Discord.js Guide: ["Building your first Discord app"](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot).

This project uses Node.js in conjunction with discord.js and axios. It is possible to ["Download Node.js from the official website"](https://nodejs.org/en/download)

After downloading and installing node.js be sure to run the following commands:

```bash
$ npm install discord.js
```
and

```bash
$ npm install axios
```

## config.json

Since the config.json contains sensitive information, the first thing you need should do after the initial Node.js setup is to create a file named "config.json" in the root folder of the project and populate it with the following information.

**About guildID** - We currently use this parameter only to register the slashcommands on the target server. If by any chance you are deploying this application anywhere, you can use the exact same deploy-command script, changing the route to .applicationCommands(clientId).

```json
	"token": "Your bot Token goes here",
  "clientId": "Your application application ID goes here",
	"guildId": "This is your server ID ",
	"freeCurrencyApiKey": "FreeCurrency API KEY"
```

## Execution

[Execution]

## Usage

[Usage]
