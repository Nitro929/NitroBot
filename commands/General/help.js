const { RichEmbed } = require("discord.js")
const { prefix } = require("../../config.json")

module.exports = {
    config: {
        name: "help", // Cmd Name
        usage: `${prefix}help`,
        caregory: "general",
        description: "About Bot Help",
        accessableby: "Members"
        
    },
run: async (bot, message,args ) => {
let arr = [];
let type = ["General"];
const embed = new RichEmbed()
if(!args[0]) {
    for (let i = 0; i <type.length; i++){
        arr.push(bot.commands.filter(c => c.config.caregory == type[i].toLocaleLowerCase()).map(c => `\`${c.config.name}\``).join(" "));

        try{
            embed.addField(type[i] , arr[i]);

        }catch (e){
            embed.addBlankField();
        }
    }
    embed.setColor("0000FF")
    embed.setAuthor(`${message.guild.me.displayName} help` , message.guild.iconURL)
    embed.setThumbnail(bot.user.displayAvatarURL)
    embed.setTimestamp()
    embed.setDescription(`${bot.user.displayName} commands \nPrefix: ${prefix} \nCommand Help | Command Count : ${bot.commands.size}`)
 message.channel.send(embed)   
}
 else {
    let command = bot.commands.get(args[0].toLowerCase()) ?  bot.commands.get(args[0].toLowerCase()).config : bot.commands.get(bot.aliases.get(args[0].toLowerCase())).config;
embed.setColor("0000FF")
embed.setAuthor(`${message.guild.me.displayName} help` , message.guild.iconURL)
embed.setThumbnail(bot.user.displayAvatarURL)
embed.setDescription(`

Prefix : ${prefix}
**Command Name ** : ${command.name}\n**
**Usage ** : ${command.usage || "none"}
**Descrption ** : ${command.description || "none"}
** Accessableby ** : ${command.accessableby || "Members"}
`)

message.channel.send(embed)

}
}
}