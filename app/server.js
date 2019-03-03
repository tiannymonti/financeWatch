require('./config/config');
const http = require('http');
const {indexHandler} = require('./routes/index');

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'}); 
    if(req.method !== 'GET'){
        res.end(JSON.stringify({Error: 'Method not allowed'}));
    } else {
       indexHandler(req, res);
    }
});

server.listen(process.env.PORT, function(){
    console.log(`Server is Listening - Port ${process.env.PORT}`); 
});

