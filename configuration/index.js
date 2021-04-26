/**
 * contains configuration files of the API
 * @module configuration
 * @requires module:configuration/db
 * @requires module:configuration/logger
 */

module.exports = {
    logger: require('./logger'),
    dbConnection: require('./db')
}