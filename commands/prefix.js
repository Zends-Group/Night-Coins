exports.execute = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_GUILD") && !client.config.admins.includes(message.member.id)) return message.channel.send(`My prefix for this server is **${client.prefix}**.`);
    let prefix = args[0];
    if (!prefix) {
        client.db.delete(`prefix_${message.guild.id}`);
        return message.channel.send(`✅ | Le préfixe du serveur a été rénitialisé`);
    } else {
        let setTo = client.db.set(`prefix_${message.guild.id}`, prefix);
        return message.channel.send(`✅ | Le préfixe a été changé à \`${setTo}\`.`);
    }
}

exports.help = {
    name: "prefix",
    aliases: ["setprefix"],
    usage: `prefix`
}
