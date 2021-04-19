require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const scrape =  require('./src/scrape');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg =>  {
  if (msg.content === '!Banres-dollar') {
    const scrappedData = Promise.resolve(scrape.scrapeBanresData);
    scrappedData.then((data) => {
        msg.reply(`${data.title} Compra: ${data.buys} Venta: ${data.sells}`);
    });
    
  }
});

client.login(process.env.BOT_TOKEN);