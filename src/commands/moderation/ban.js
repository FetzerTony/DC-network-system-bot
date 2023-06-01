const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Banne einen User vom Server!")
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
    .addUserOption(option => 
        option.setName("user")
        .setDescription("User, der gebannt werden soll")
        .setRequired(true)
        )
    .addStringOption(option => 
        option.setName("grund")
        .setDescription("Grund, weshalb der User gebannt werden soll")
        .setRequired(true)
        ),
    
    async execute(interaction) {
        const { options, channel } = interaction;
        const user = options.getUser("user");
        const reason = options.getString("grund");

        const member = await interaction.guild.members.fetch(user.id);

        const errorEmbed = new EmbedBuilder()
        .setDescription(`Der User ${user.username} kann nicht gebannt werden, weil er eine höhere Rolle besitzt!`)
        .setColor("Red")

        if (member.roles.highest.position >= interaction.member.roles.highest.position)
        return interaction.reply({ embeds: [errorEmbed], ephemeral: true })

        await member.ban({ reason });

        const successEmbed = new EmbedBuilder()
        .setDescription(`Der User ${user.username} wurde erfolgreich gebannt!\nGrund: ${reason}`)
        .setColor("Green")

        await interaction.reply({ embeds: [successEmbed], ephemeral: true})
    }
}