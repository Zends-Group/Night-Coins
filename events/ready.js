module.exports = async(client, data) => {
  client.user.setActivity(`.gg/nightboost`, {
      type: "STREAMING",
      url: "https://www.twitch.tv/hichioo"
    });
}