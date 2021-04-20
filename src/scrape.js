const cheerio = require('cheerio');
const fetch = require('node-fetch');

const makeRequest = async (url) => {
    try {
        const res = await fetch(url);
        const html = await res.text();
        const $ = cheerio.load(html);
        return $;
    } catch (err) {
        console.log(err);
    }

}

const scrapeBR = async () => {
    const $ = await makeRequest("https://www.banreservas.com/");

    return {
        title: $('title').first().text(),
        buys: $('.currency-nav').find('.first').find('span').text(),
        sells: $('.currency-nav').find('.last').find('span').text(),
    }
}

const scrapeScotiaBank = async () => {
    const $ = await makeRequest("https://do.scotiabank.com/banca-personal/tarifas/tasas-de-cambio.html");

    return {
            title: $('title').first().text(),
            buys: $('.bns--table > tbody >  tr:nth-child(2) > td:nth-child(3)').text(),
            sells: $('.bns--table > tbody >  tr:nth-child(2) > td:nth-child(4)').text(),
            
        } 
};

const scrapePopular = async () => {
    const $ = await makeRequest("https://popularenlinea.com/personas/Paginas/Home.aspx");

    return {
            title: $('title').first().text(),
            buys: $('#compra_peso_dolar_desktop').attr('value')
            
        } 
}

const scrapePromerica = async () => {
    const $ = await makeRequest("https://www.promerica.com.do/");

    return {
            title: $('title').first().text()
            
        } 
}

const scrapeBanresData = Promise.resolve(scrapeBR());
const scrapeScotiaBankData = Promise.resolve(scrapeScotiaBank());
const scrapePopularData = Promise.resolve(scrapePopular());
// const scrapePromericaData = Promise.resolve(scrapePromerica());

module.exports = {
    scrapeBanresData,
    scrapeScotiaBankData,
    scrapePopularData
}

