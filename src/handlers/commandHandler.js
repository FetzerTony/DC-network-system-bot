function loadCommands(client) {
    const ascii = require("ascii-table");
    const fs = require("fs");
    const table = new ascii().setHeading('Commands', 'Status');

    let commandsArray = [];

    const commandsFolders = fs.readdirSync('./src/commands/');
    for ( const folder of commandsFolders ) {
        const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter((file) => file.endsWith(".js"));

        for ( const file of commandFiles ) {
            const commandFile = require(`../commands/${folder}/${file}`);

            client.commands.set(commandFile.data.name, commandFile);

            commandsArray.push(commandFile.data.toJSON());

            table.addRow(file, "geladen")
            continue;
        }
    }

    client.application.commands.set(commandsArray);

    return console.log(table.toString(), "\nCommands geladen");
}

module.exports = {loadCommands};