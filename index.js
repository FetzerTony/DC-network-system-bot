const { Client, GatewayIntentBits, Partials, Guild, Collection } = require('discord.js');

const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember, Channel } = Partials;

const {loadEvents} = require('./src/handlers/eventHandler')
const {loadCommands} = require('./src/handlers/commandHandler')

const client = new Client({
    intents: [ Guilds, GuildMembers, GuildMessages ],
    partials: [ User, Message, GuildMember, ThreadMember ],
});

client.commands = new Collection();
client.config = require("./config.json");

module.exports = { client };

client.login(client.config.token).then(() => {
    loadEvents(client);
    loadCommands(client);
})