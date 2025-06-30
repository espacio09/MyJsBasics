//console.log(__filename);
//console.log(__dirname);

var url = 'http://mylogger.io/log';

function log(message) {  
        //Send an HTTP request
        console.log(message);
  }

module.exports = log;   // exports makes log function visible to outside world
// url can be exported having name endPoint
//module.exports.endPoint = url;   //endPoint is outside