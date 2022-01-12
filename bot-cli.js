const readline = require('readline');
const { COMMANDS } = require('./src/utils/constants');
const chalk = require('chalk')
require('dotenv').config();
const fetch = require('node-fetch');
const { utils } = require('./src/utils/utils');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on("line", (line) => {
  if (line === COMMANDS.GET_HELP) {
    console.log(
      `
      ${chalk.underline.bold('Commands')}:
      ${chalk.bold('Help')}: !Banks
      ${chalk.bold('Banreservas')}: !Banreservas
      ${chalk.bold('ScotiaBank')}: !Scotiabank
      ${chalk.bold('BHD')}: !BHD
      ${chalk.bold('Popular')}: !Popular
      ${chalk.bold('Banco Caribe')}: !BancoCaribe
      ${chalk.bold('Promerica')}: !Promerica
      ${chalk.bold('Todos los bancos')}: !AllBanks
      `
    )
  }

  if (line === COMMANDS.GET_BANRESERVAS) {
    fetch(`${process.env.DOLLAR_API_URL}/Banreservas`)
      .then(res => res.json())
      .then(data => {
        console.log("`" + utils.createReply('Banreservas',data) + "`")
        
      });
  }

  if(line === COMMANDS.GET_SCOTIABANK) {
    fetch(`${process.env.DOLLAR_API_URL}/Scotiabank`)
    .then(res => res.json())
    .then(data => {
      console.log("`" + utils.createReply('Scotiabank',data) + "`")
    });
  }

  if(line === COMMANDS.GET_POPULAR) {
    fetch(`${process.env.DOLLAR_API_URL}/Popular`)
    .then(res => res.json())
    .then(data => {
      console.log("`" + utils.createReply('Popular',data) + "`")
    });
  }

  if(line === COMMANDS.GET_BHD) {
    fetch(`${process.env.DOLLAR_API_URL}/BHD`)
    .then(res => res.json())
    .then(data => {
      console.log("`" + utils.createReply('BHD',data) + "`")
    });
  }
  if(line === COMMANDS.GET_BANCO_CARIBE) {
    fetch(`${process.env.DOLLAR_API_URL}/Bancocaribe`)
    .then(res => res.json())
    .then(data => {
      console.log("`" + utils.createReply('Bancocaribe',data) + "`")
    });
  }

  if(line === COMMANDS.GET_APAP) {
    fetch(`${process.env.DOLLAR_API_URL}/APAP`)
    .then(res => res.json())
    .then(data => {
      console.log("`" + utils.createReply('APAP',data) + "`")
    });
  }

  if(line === COMMANDS.GET_PROMERICA) {
    fetch(`${process.env.DOLLAR_API_URL}/Promerica`)
    .then(res => res.json())
    .then(data => {
      console.log("`" + utils.createReply('Promerica',data) + "`")
    });
  }

  if(line === COMMANDS.GET_ALL_BANKS) {
    let banksData = [];
    fetch(`${process.env.DOLLAR_API_URL}/allbanks`)
    .then(res => res.json())
    .then(data => {
      data.forEach(bank => {
        banksData.push("`" + utils.createReply(bank.name ,bank) + "`");
      })
      const result = banksData.join('\n');
      console.log(result);
    });

  }

  if (line.toLowerCase() === 'exit') {
    rl.close();
  }
})

rl.on('close', () => {
  console.log('Good bye!')
})