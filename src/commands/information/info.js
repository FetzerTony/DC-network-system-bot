const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Zeigt dir Informationen über mich und den Server!"),
    
    async execute(interaction) {
        const embed = new EmbedBuilder()
        .setDescription(`Das ist der offizielle Discord Server von Tony. Hier könnt ihr miteinander kommunizieren, euch austauschen und vieles weitere Dinge erleben.`)
        .setColor("Purple")
        .addFields({ name: "🌐 Quick Links", value: "• [Twitch](https://twitch.tv/)\n• [Youtube Main](https://youtube.com/channel/)\n• [Youtube 2. Kanal](https://youtube.com/channel/)\n• [Twitter](https://twitter.com/)\n",
        inline: true}, { name: "🌐 Information", value: "• Gründung: \`10.08.2022, 03:11:16\`\n• Owner: <@570017756338978826>\n• Invite: https://discord.gg/9FFFynjKWR\n", 
        inline: true}, { name: "🌐 Kontakt", value: "• Support: <#1007462823410012261>\n   └> Zeiten: Mo - Fr\n                      15:00 - 20:00 Uhr\n",
        inline: true})
    .setAuthor({ name: "Informationen", icon_url: "https://i.imgur.com/bpW7cKu.png"})

        await interaction.reply({ embeds: [embed], ephemeral: true})
    }
}