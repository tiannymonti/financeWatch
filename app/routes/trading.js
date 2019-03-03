const url = require('url');

const { getLatestStockPrice, getLogo, getLatestNews, getAllInfo } = require('../core/getTrading');
const { logger } = require('../core/logger');

function getSymbol(req) {
    return url.parse(req.url,true).query.symbol;
}

function getData (getFunction, symbol, res, path){
    return getFunction(symbol)
        .then(r => {
            logger(path, 'SUCCESS');
            res.end(JSON.stringify(r));
        }).catch(e => {
            logger(path, 'FAILED');
            res.end(JSON.stringify(e));
        });
}

function latestPrice(req, res){
    const symbol = getSymbol(req);
    getData(getLatestStockPrice, symbol, res, req.url); 
}

function logo(req, res){
    const symbol = getSymbol(req); 
    getData(getLogo, symbol, res, req.url);
}

function latestNews(req, res){
    const symbol = getSymbol(req);
    getData(getLatestNews, symbol, res, req.url);
}

function defaultPath(req, res){
    const symbol = getSymbol(req);
    getData(getAllInfo, symbol, res, req.url);
}

module.exports = {
    latestPrice,
    logo,
    latestNews,
    defaultPath
}