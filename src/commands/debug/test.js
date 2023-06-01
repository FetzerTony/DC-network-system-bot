const { SlashCommandBuilder, CommandInteraction } = require('discord.js');
const { execute } = require('../../events/interactions/interactionCreate');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("Testet, ob der Bot funktioniert!"),

    execute(interaction) {
        interaction.reply({ content: `Test erfolgreich! Bot funktionsfähig!`, ephemeral: true})
    }
}