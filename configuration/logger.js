const {createLogger, transports} = require('winston');
 
const logger = createLogger({ 
    transports : [
        new transports.File({
            filename: './logs/infoLog.log',
            level: 'info'
        })
    ],
});

logger.stream = {
    write: (message, encoding) => {
        logger.info(message);
    }
}

module.exports = logger;