const { ComponentType, EmbedBuilder, SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Erhalte eine Übersicht über alle Befehle!'),

    async execute(interaction) {
        const emojis = {
            
        }
    }
}