require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const scrape =  require('./src/scrape');
const fetch = require('node-fetch');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg =>  {

  if(msg.content === "!Banks") {
    msg.reply(
      `
      Commands:
      Help: !Banks
      **Banreservas**: !Banreservas
      **ScotiaBank**: !Scotiabank
      **BHD**: !BHD
      **Popular**: !Popular
      **Banco Caribe**: !BancoCaribe
      `
    )
  }

  if (msg.content === '!Banreservas') {
    fetch(`${process.env.DOLLAR_API_URL}/Banreservas`)
      .then(res => res.json())
      .then(data => {
        msg.reply(`**Banreservas** Compra: **${data.buysDollar}** Venta: **${data.sellsDollar}**`)
      });
  }

  if(msg.content === "!Scotiabank") {
    fetch(`${process.env.DOLLAR_API_URL}/Scotiabank`)
    .then(res => res.json())
    .then(data => {
      msg.reply(`**Scotiabank** Compra: **${data.buysDollar}** Venta: **${data.sellsDollar}**`)
    });
  }

  if(msg.content === "!Popular") {
    fetch(`${process.env.DOLLAR_API_URL}/Popular`)
    .then(res => res.json())
    .then(data => {
      msg.reply(`**Banco Popular** Compra: **${data.buysDollar}** Venta: **${data.sellsDollar}**`)
    });
  }

  if(msg.content === "!BHD") {
    fetch(`${process.env.DOLLAR_API_URL}/BHD`)
    .then(res => res.json())
    .then(data => {
      msg.reply(`**BHD Leon** Compra: **${data.buysDollar}** Venta: **${data.sellsDollar}**`)
    });
  }
  if(msg.content === "!BancoCaribe") {
    fetch(`${process.env.DOLLAR_API_URL}/Bancocaribe`)
    .then(res => res.json())
    .then(data => {
      msg.reply(`**Banco Caribe** Compra: **${data.buysDollar}** Venta: **${data.sellsDollar}**`)
    });
  }
});





client.login(process.env.BOT_TOKEN);