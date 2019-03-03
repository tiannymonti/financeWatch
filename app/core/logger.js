const fs = require('fs');

const mainDate = new Date().toLocaleDateString();
const filePath = `logs/log-${mainDate}.txt`;
let infoStream = fs.createWriteStream(filePath, {'flags': 'a'});

const logger = function(urlpath, status) {
    if (!fs.existsSync(filePath)) {
        infoStream = fs.createWriteStream(filePath, {'flags': 'a'});
    }
    let messageDate = new Date();
    const dateWoTime = messageDate.toLocaleDateString("en-US",{year:"2-digit",month:"2-digit", day:"2-digit"});
    const timeWoDate = messageDate.toLocaleTimeString(undefined, {
        hour: '2-digit', minute: '2-digit',
        second: '2-digit', hour12: false, 
    });
    let message = `${urlpath} ${dateWoTime} ${timeWoDate} ${status} \n`;
    infoStream.write(message);
};

module.exports = {logger} 


