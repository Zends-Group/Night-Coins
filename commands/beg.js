exports.execute = async (client, message, args) => {
    let users = [
        "PewDiePie",
        "T-Series",
        "Sans",
        "Zero"
    ];
    let amount = Math.floor(Math.random() * 50) + 10;
    let beg = client.eco.beg(client.ecoAddUser, amount, { canLose: true });
    if (beg.onCooldown) return message.reply(`Trop tôt! Reviens après ${beg.time.seconds} secondes.`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** Reviens plus tard`);
    else return message.reply(`**${users[Math.floor(Math.random() * users.length)]}** t'as donné **${beg.amount}** 💸. Tu as maintenant **${beg.after}** 💸.`);
};

exports.help = {
    name: "beg",
    aliases: [],
    usage: "beg"
}
