const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const token = require("./config.json");
const {Token} = require("botconfig.json");
bot.on('ready' , ()=> {
  console.log(`Bot Logging At Discord ${bot.user.tag}!`);
});

bot.on('message' , msg =>{
  if (msg = content === 'ping'){
      msg.reply("Pong!");
  }
});

bot.login(config.token)
bot.login(Token)
