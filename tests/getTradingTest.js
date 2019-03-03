const {getLatestStockPrice, getLogo, getLatestNews, getAllInfo } = require('../app/core/getTrading');
const assert = require('assert');
const symbol = 'aapl';

function getLatestStockPriceTest(){
    console.log('1. getLatestStockPrice() should not reject');
    assert.doesNotReject(getLatestStockPrice(symbol))
        .then(() => {
            console.log('getLatestStockPrice() did not reject, TEST PASSED')
        }).catch(e => {
            console.error('getLatestStockPrice() REJECTS, TEST FAILED')
        });
}

async function getLatestStockPriceTestResult(){
    console.log('2. getLatestStockPrice() should bring a number');
    let result = await getLatestStockPrice(symbol);
    try {
        assert.ok(typeof result.latestPrice === 'number');
        console.log('getLatestStockPrice() brings a number. TEST PASSED');
      } catch (error) {
        console.error('getLatestStockPrice() DOES NOT BRING A NUMBER, TEST FAILED');
      }
}

function getLogoTest(){
    console.log('3. getLogo() should not reject');
    assert.doesNotReject(getLogo(symbol))
        .then(() => {
            console.log('getLogo() did not reject, TEST PASSED')
        }).catch(e => {
            console.error('getLogo() REJECTS, TEST FAILED')
        });
}

async function getLogoTestResult(){
    console.log('4. getLogo() should bring an url');
    let result = await getLogo(symbol);
    const res = result.logoUrl.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    try {
        assert.ok(res);
        console.log('getLogo() brings an url. TEST PASSED');
    } catch (error) {
        console.error('getLogo() DOES NOT BRING AN URL, TEST FAILED');
    }
}

function getLatestNewsTest(){
    console.log('5. getLatestNews() should not reject');
    assert.doesNotReject(getLatestNews(symbol))
        .then(() => {
            console.log('getLatestNews() did not reject, TEST PASSED')
        }).catch(e => {
            console.error('getLatestNews() REJECTS, TEST FAILED')
        });
}

async function getLatestNewsTestResult(){
    console.log('6. getLogoPrice() should bring an url');
    let result = await getLatestNews(symbol);
    const res = result.latestNews.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    try {
        assert.ok(res);
        console.log('getLatestNews() brings an url. TEST PASSED');
    } catch (error) {
        console.error('getLatestNews() DOES NOT BRING AN URL, TEST FAILED');
    }
}

module.exports = {
    getLatestStockPriceTest,
    getLatestStockPriceTestResult,
    getLogoTest,
    getLogoTestResult,
    getLatestNewsTest,
    getLatestNewsTestResult,
}