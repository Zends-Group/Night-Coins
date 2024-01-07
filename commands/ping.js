const { MessageEmbed } = require("discord.js");

exports.execute = (client, message, args) => {
    let gatewayLatency = Math.floor(client.ws.ping);
    message.channel.send("Latence...").then(m => {
        const trip = Math.floor(m.createdTimestamp - message.createdTimestamp);
        const embed = new MessageEmbed()
            .setTitle("Pong!")
            .addField("Latence d'API", `${gatewayLatency}ms`, true)
            .addField("Latence du bot", `${trip}ms`, true)
            .setColor("#7289DA")
            .setTimestamp();
        m.edit(embed);
    });
}

exports.help = {
    name: "ping",
    aliases: ["pong", "latency"],
    usage: `ping`
}
