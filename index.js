const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

const token = process.env.TOKEN;

client.on('ready', () => {
    console.log(`${client.user.tag} olarak giriş yapıldı!`);
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith('!')) return;

    const args = message.content.slice(1).split(' ');
    const command = args[0].toLowerCase();

    if (command === 'ping') {
        await message.reply('Pong! 🏓');
    }

    if (command === 'çekiliş') {
        await message.channel.send('🎉 Çekiliş komutu yakında hazır olacak!');
    }
});

client.login(token);
