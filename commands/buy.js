const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let userBalance = client.eco.fetchMoney(message.author.id);
  if (userBalance.amount < 1) return message.channel.send("On dirait que tu es pauvre.");
  let item = args[0];
  if (!item) return message.channel.send("Que veux-tu acheter?");
  let hasItem = client.shop[item];
  if (!hasItem || hasItem == undefined) return message.reply("Cet objet n'éxiste pas.");
  let isBalanceEnough = (userBalance.amount >= hasItem.cost);
  if (!isBalanceEnough) return message.reply("Tu n'as pas assez d'argent! Tu as besoin de :dollar: "+hasItem.cost+" pour acheter cet objet.");
  let buy = client.eco.removeMoney(message.author.id, hasItem.cost);
  
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  };
  
  client.db.push(`items_${message.author.id}`, itemStruct);
  return message.channel.send(`Tu as acheté **${item}** pour **:dollar: ${hasItem.cost}**.`);
};

exports.help = {
  name: "buy",
  aliases: [],
  usage: `buy <item>`
};
