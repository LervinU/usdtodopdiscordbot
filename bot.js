require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const scrape =  require('./src/scrape');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg =>  {

  if(msg.content === "!dollar-help") {
    msg.reply(
      `
      Commands:
      Help: !dollar-help
      Banreservas: !Banreservas
      ScotiaBank: !Scotiabank
      `
    )
  }

  if (msg.content === '!Banreservas') {
    const scrappedData = Promise.resolve(scrape.scrapeBanresData);
    scrappedData.then((data) => {
        msg.reply(`**Banreservas** Compra: **${data.buys}** Venta: **${data.sells}**`);
    });
  }

  if(msg.content === "!Scotiabank") {
    const scrappedData = Promise.resolve(scrape.scrapeScotiaBankData);
    scrappedData.then((data) => {
      console.log(data);
      msg.reply(`**Scotiabank** Compra: **${data.buys}** Venta: **${data.sells}**`);
    });
  }

  if(msg.content === "!Popular") {
    const scrappedData = Promise.resolve(scrape.scrapePopularData);
    scrappedData.then((data) => {
      console.log(data);
      msg.reply(`**Banco Popular Dominicano** -  In development`);
    });
  }
});



client.login(process.env.BOT_TOKEN);