const cheerio = require('cheerio');
const fetch = require('node-fetch');

const makeRequest = async (url) => {
    const res = await fetch(url);
    const html = await res.text();
    const $ = cheerio.load(html);
    return $;
}

const scrapeBR = async () => {
    const $ = await makeRequest("https://www.banreservas.com/");

    return {
        title: $('title').first().text(),
        buys: $('.currency-nav').find('.first').find('span').text(),
        sells: $('.currency-nav').find('.last').find('span').text(),
    }
}

const scrapeBanresData = Promise.resolve(scrapeBR());

module.exports = {
    scrapeBanresData
}

