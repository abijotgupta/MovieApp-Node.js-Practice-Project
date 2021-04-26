const http = require('http');
const app = require('./app.js');

/**
 * @type {httpServer}
 * @const
*/
const server = http.createServer(app);

/**
 * @function serverListener
 * @param {number} port - port
 * @param {Callback} listener
*/
server.listen('5600', () => {
    console.log('Server is listening now!!!');
});