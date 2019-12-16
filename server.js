const http = require('http');
const Config = require('./config');
const env = process.env.name;
const config = Config[env];

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write('my name is '+ env);
  response.end();
}).listen(config.port);
console.log('server port is %d', config.port);


