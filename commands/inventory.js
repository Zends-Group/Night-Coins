const { MessageEmbed } = require("discord.js")
exports.execute = async (client, message, args) => {

  const embed = new MessageEmbed()
    .setAuthor(`Inventaire de ${message.author.tag}`, message.guild.iconURL)
    .setColor("RANDOM")
    .setThumbnail()
    .setTimestamp();
  const x = client.db.get(`items_${message.author.id}`);
if(!x) { return message.channel.send(`Tu n'as pas d'objets!`); }
const arrayToObject = x.reduce((itemsobj, x) => {
    itemsobj[x.name] = (itemsobj[x.name] || 0) + 1;
    return itemsobj;
}, {});
const result = Object.keys(arrayToObject).map(k => embed.addField(`Nom: ${k}`,`Quantité: **${arrayToObject[k]}**`, false));
  
 
  return message.channel.send(embed);
}
exports.help = {
  name: "inventory",
  aliases: ["inv"],
  usage: `inv`
}

