exports.execute = async (client, message, args) => {
  let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
  if(!target) return message.reply("Who are you trying to rob?")
  let messages = [
    `Vous avez trébuché en essayant de voler ${target} et vous vous êtes fait prendre !`,
    `Aie, ${target} a appelé les flics contre vous !`,
    `Tu t'es fais drogué par ${target}!`
  ]
   let amount = Math.floor(Math.random() * 50) + 10;
    let rob = client.eco.beg(client.ecoAddUser, amount, { canLose: true });
    if (rob.onCooldown) return message.reply(`You have recently attempted to rob someone try again after ${rob.time.seconds} seconds.`);
    if (rob.lost) return message.channel.send(messages[Math.floor(Math.random() * messages.length)]);
    else { 
      let x = client.eco.fetchMoney(target.id).amount - amount 
      
      client.eco.setMoney(target.id,parseInt(x))
      message.reply(`Tu as volé ${target} pour **${rob.amount}** 💸. Tu as maintenant **${rob.after}** 💸.`);
    }
};

exports.help = {
    name: "rob",
    aliases: [],
    usage: "rob <user>"
}
