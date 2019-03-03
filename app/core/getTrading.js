const https = require('https');

const defHost = 'https://api.iextrading.com/1.0/stock';
const unknownSymbol = 'Unknown symbol';

const getData = (url) => {
    return new Promise((resolve, reject) => {
        const request = https.get(url, (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });
            resp.on('end', () => {
                resolve(data)
            });
        })
        request.on("error", (err) => reject(err));
    });
}

const getLatestStockPrice = async (symbol) => {
    let result = await getData(`${defHost}/${symbol}/quote`);
    if(result === unknownSymbol) throw {Error : result};
    return {latestPrice: JSON.parse(result).latestPrice};
}

const getLogo = async (symbol) => {
    let result = await getData(`${defHost}/${symbol}/logo`);
    if(result === unknownSymbol) throw {Error: result};
    return {logoUrl: JSON.parse(result).url};
}

const getLatestNews = async (symbol) => {
    let result = await getData(`${defHost}/${symbol}/news`);
    if(result === unknownSymbol) throw {Error: result};
    return {latestNews: JSON.parse(result)[0].url};
}

const getAllInfo = async (symbol) => {
    let latestPrice = await getLatestStockPrice(symbol);
    let logoUrl = await getLogo(symbol);
    let latestNews = await getLatestNews(symbol);
    return Object.assign(latestPrice, logoUrl, latestNews);
}

module.exports = {
    getData,
    getLatestStockPrice,
    getLogo,
    getLatestNews,
    getAllInfo,
}