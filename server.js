
const app = require('./app');

const http = require('http');
const port = process.env.port || 5000;

const server = http.createServer(app);

server.listen(port);