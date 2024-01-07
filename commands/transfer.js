exports.execute = async (client, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
  let authordata = client.eco.fetchMoney(message.author.id) 
  if (!member) return message.channel.send('Merci de mentionner la personne ou de mettre son ID') 
  let amount = args[1]
  if (!amount || isNaN(amount)) return message.channel.send("Merci d'entrer un montant valide pour transférer") 
  if(authordata.amount < amount) return message.channel.send('Looks like you don\'t have that much money') 
  await client.eco.transfer(message.author.id, member.id, amount) 
  return message.channel.send(`Tu as transféré 💸**${amount}** à ** ${member.user.tag}**.`)
}
exports.help = {
  name: "transfer",
  aliases: ['give', 'share'],
  usage: `transfer <member> <amount>`
};
