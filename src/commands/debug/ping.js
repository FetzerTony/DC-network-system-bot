const { SlashCommandBuilder, CommandInteraction, Client, EmbedBuilder } = require('discord.js');
const { execute } = require('../../events/interactions/interactionCreate');
const { client } = require('../../../index.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Zeigt dir den aktuellen Ping!"),

    execute(interaction) {
        const embed = new EmbedBuilder()
        .setTitle("__Bot Netzwerk-Informationen__")
        .addFields({ name: 'Latenz', value: `${Date.now() - interaction.createdTimestamp} ms`},
        { name: 'API-Latenz', value: `${Math.round(client.ws.ping)} ms`})
        .setColor("Purple")
        .setAuthor({ name: "Pong!"})

        interaction.reply({ embeds: [embed], ephemeral: true});
    }
}