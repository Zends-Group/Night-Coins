const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    if (!client.config.admins.includes(message.author.id)) return; // return if author isn't bot owner
    let user = message.mentions.users.first();
    if (!user) return message.channel.send("Merci de spécifier un utilisateur.");
    let amount = args[1];
    if (!amount || isNaN(amount)) return message.reply("Merci de spécifier un montant valide.");
    let data = client.eco.setMoney(user.id, parseInt(amount));
    const embed = new MessageEmbed()
        .setTitle(`Argent modifiée`)
        .addField(`Utilisateur`, `<@${data.user}>`)
        .addField(`Argent total`, data.after)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}

exports.help = {
    name: "setmoney",
    aliases: ["setbal"],
    usage: `setmoney @user <amount>`
}
