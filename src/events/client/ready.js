const {Client} = require('discord.js');

module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        console.log(`Bot gestartet! Eingeloggt als "${client.user.tag}"!`);
    }
}