module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 500) + 100;
    let addMoney = client.eco.daily(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply(`Tu as déjà réclamé ton argent quotidien! Reviens après ${addMoney.time.hours} heures, ${addMoney.time.minutes} minutes & ${addMoney.time.seconds} pour réclamer.`);
    else return message.reply(`Tu as réclamé **${addMoney.amount}** 💸 avec ton argent quotidient et tu as maintenant **${addMoney.after}** 💸.`);
};

module.exports.help = {
    name: "daily",
    aliases: [],
    usage: "daily"
}
