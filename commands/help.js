const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    const embed = new MessageEmbed()
        .setAuthor("Commandes")
        .setTitle("Voici la liste des commandes")
        .setDescription(`Commandes totales: ${client.commands.size}`)
        .setColor("BLURPLE")
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(message.author.tag, message.author.displayAvatarURL);
    client.commands.forEach(cmd => {
        embed.addField(`${cmd.help.name}`, `Allias: ${cmd.help.aliases.join(", ") || "None"}\nUtilisation: \`${client.prefix}${cmd.help.usage}\``, true);
    });
    return message.channel.send(embed);
}

exports.help = {
    name: "help",
    aliases: ["h"],
    usage: `help`
}
