require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const scrape =  require('./src/scrape');
const fetch = require('node-fetch');
const { utils } = require('./src/utils/utils');
const { COMMANDS } = require('./src/utils/constants');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg =>  {

  if(msg.content === COMMANDS.GET_HELP) {
    msg.reply(
      `
      Commands:
      Help: !Banks
      **Banreservas**: !Banreservas
      **ScotiaBank**: !Scotiabank
      **BHD**: !BHD
      **Popular**: !Popular
      **Banco Caribe**: !BancoCaribe
      **Promerica: !Promerica
      `
    )
  }

  if (msg.content === COMMANDS.GET_BANRESERVAS) {
    fetch(`${process.env.DOLLAR_API_URL}/Banreservas`)
      .then(res => res.json())
      .then(data => {
        msg.reply("`" + utils.createReply('Banreservas',data) + "`")
        
      });
  }

  if(msg.content === COMMANDS.GET_SCOTIABANK) {
    fetch(`${process.env.DOLLAR_API_URL}/Scotiabank`)
    .then(res => res.json())
    .then(data => {
      msg.reply("`" + utils.createReply('Scotiabank',data) + "`")
    });
  }

  if(msg.content === COMMANDS.GET_POPULAR) {
    fetch(`${process.env.DOLLAR_API_URL}/Popular`)
    .then(res => res.json())
    .then(data => {
      msg.reply("`" + utils.createReply('Popular',data) + "`")
    });
  }

  if(msg.content === COMMANDS.GET_BHD) {
    fetch(`${process.env.DOLLAR_API_URL}/BHD`)
    .then(res => res.json())
    .then(data => {
      msg.reply("`" + utils.createReply('BHD',data) + "`")
    });
  }
  if(msg.content === COMMANDS.GET_BANCO_CARIBE) {
    fetch(`${process.env.DOLLAR_API_URL}/Bancocaribe`)
    .then(res => res.json())
    .then(data => {
      msg.reply("`" + utils.createReply('Bancocaribe',data) + "`")
    });
  }

  if(msg.content === COMMANDS.GET_APAP) {
    fetch(`${process.env.DOLLAR_API_URL}/APAP`)
    .then(res => res.json())
    .then(data => {
      msg.reply("`" + utils.createReply('APAP',data) + "`")
    });
  }

  if(msg.content === COMMANDS.GET_PROMERICA) {
    fetch(`${process.env.DOLLAR_API_URL}/Promerica`)
    .then(res => res.json())
    .then(data => {
      msg.reply("`" + utils.createReply('Promerica',data) + "`")
    });
  }


});





client.login(process.env.BOT_TOKEN);