module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 1500) + 1000;
    let work = client.eco.work(client.ecoAddUser, amount);
    if (work.onCooldown) return message.reply(`Tu es fatigué, reviens après ${work.time.minutes} minutes et ${work.time.seconds} secondes pour travailler à nouveau.`);
    else return message.reply(`Vous avez travaillé comme **${work.workedAs}** et gagné **${work.amount}** 💸. Vous avez maintenant **${work.after}** 💸.`);
};

module.exports.help = {
    name: "work",
    aliases: [],
    usage: "work"
}
