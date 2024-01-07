exports.execute = async (client, message, args) => {
    let users = [
        "Pocket",
        "T-Shirt",
        "Street"
    ];
    let amount = Math.floor(Math.random() * 200) + 50;
    let beg = await client.eco.beg(client.ecoAddUser, amount, { canLose: true, cooldown: 300000, customName: "search" });
    if (beg.onCooldown) return message.reply(`Reviens après ${beg.time.minutes} minutes & ${beg.time.seconds} secondes.`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** Vous avez été attrapé ! Tu ne pouvais pas avoir d'argent, gamin.`);
    else return message.reply(`**${users[Math.floor(Math.random() * users.length)]}** était plutôt rentable, vous avez trouvé **${beg.amount}** 💸. Tu as maintenant **${beg.after}** 💸.`);
};

exports.help = {
    name: "search",
    aliases: [],
    usage: "search"
}
