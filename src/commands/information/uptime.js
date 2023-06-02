const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { client } = require('../../../index.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('uptime')
    .setDescription('Zeigt die Uptime des Bots!'),

    async execute(interaction) {
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);

        const embed = new EmbedBuilder()
        .setTitle("Bot Uptime")
        .setDescription(`${days} Tage, ${hours} Stunden, ${minutes} Minuten und ${seconds} Sekunden!`)


        await interaction.reply({ embeds: [embed], ephemeral: true});
    }
}