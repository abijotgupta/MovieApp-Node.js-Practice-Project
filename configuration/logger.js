/**
 * Logger
 * @module configuration/logger
 */

const {createLogger, transports} = require('winston');
 
/**
 * @type {WinstonLogger}
 */
const logger = createLogger({ 
    transports : [
        new transports.File({
            filename: './logs/infoLog.log',
            level: 'info'
        })
    ],
});

logger.stream = {
    /**
     * create write stream to the logger
     * @method write
     * @param {string} message - message to be logged
     * @param {string} encoding - encoding scheme
   */
    write: (message, encoding) => {
        logger.info(message);
    }
}

module.exports = logger;