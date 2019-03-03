FinanceWatch API
=================
Stock Ticker Symbol Lookup.

With this program, once you input a stock symbol, the latest stock price, company logo and latest news 
can be received.
Made by TBM.

Setting Up
=================
No npm libraries were used on the development of this software. Node.JS core libraries such as
HTTP, HTTPS, fs and url were used.
The API from iextrading.com was used in order to obtain the required information.

Deploying
=================
To start the server: npm start (The port can be changed on app/config/config.js)
To test the server: npm test
There are 4 endpoints which receive a query parameter called _symbol_.
* ***/*** :This endpoint it to receive all information on a JSON object
* ***/latestPrice***: Receives last stock price
* ***/logo***: Receives company logo url
* ***/latestNews***: Receives latest news from company

##Some examples
curl http://localhost:3000/?symbol=aapl
curl http://localhost:3000/latestPrice?symbol=aapl

Version History
=================
#### 0.0.0
- Mockup Complete!