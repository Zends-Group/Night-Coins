exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 1000) + 500;
    let addMoney = client.eco.weekly(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply(`Vous avez déjà réclamé votre crédit hebdomadaire. Reviens après ${addMoney.time.days} jours, ${addMoney.time.hours} heures, ${addMoney.time.minutes} minutes & ${addMoney.time.seconds} pour réclamer.`);
    else return message.reply(`Tu as réclamé **${addMoney.amount}** 💸 de ton argent hebdomadaire **${addMoney.after}** 💸.`);
};

exports.help = {
    name: "weekly",
    aliases: [],
    usage: "weekly"
}
