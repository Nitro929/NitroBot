const { Client , Collection , RichEmbed } = require("discord.js")
const Discord = require("discord.js");
const bot = new Client();
const config = require("./config.json");
const token = require("./config.json");
["aliases", "commands"].forEach(x => bot[x] = new Collection());
["command", "events"].forEach(x => require(`./handlers/${x}`) (bot));


bot.login(config.token);