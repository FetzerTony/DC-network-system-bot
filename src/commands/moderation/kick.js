const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Kicke einen User vom Server!")
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
    .addUserOption(option => 
        option.setName("user")
        .setDescription("User, der gekickt werden soll")
        .setRequired(true)
        )
    .addStringOption(option => 
        option.setName("grund")
        .setDescription("Grund, weshalb der User gekickt werden soll")
        .setRequired(true)
        ),
    
    async execute(interaction) {
        const { options, channel } = interaction;
        const user = options.getUser("user");
        const reason = options.getString("grund");

        const member = await interaction.guild.members.fetch(user.id);

        const errorEmbed = new EmbedBuilder()
        .setDescription(`Der User ${user.username} kann nicht gekickt werden, weil er eine höhere Rolle besitzt!`)
        .setColor("Red")

        if (member.roles.highest.position >= interaction.member.roles.highest.position)
        return interaction.reply({ embeds: [errorEmbed], ephemeral: true })

        await member.kick()

        const successEmbed = new EmbedBuilder()
        .setDescription(`Der User ${user.username} wurde erfolgreich gekickt!\nGrund: ${reason}`)
        .setColor("Green")

        await interaction.reply({ embeds: [successEmbed], ephemeral: true})
    }
}