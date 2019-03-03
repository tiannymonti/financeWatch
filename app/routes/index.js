const { latestPrice, logo, latestNews, defaultPath } = require('./trading');
const url = require('url');

function indexHandler(req, res){
    const path = url.parse(req.url,true).pathname;
    switch(path) {
        case '/latestPrice':
            latestPrice(req, res);
            break;
        case '/logo':
            logo(req, res);
            break;
        case '/latestNews':
            latestNews(req, res);
            break;
        default:
            defaultPath(req, res);
            break;
   }
}

module.exports = {indexHandler}