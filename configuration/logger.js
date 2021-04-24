const {createLogger, transports} = require('winston');
 
const logger = createLogger({ 
    transports : [
        new transports.File({
            filename: './logs/infoLog.log',
            level: 'info'
        })
    ],
});

module.exports = logger;