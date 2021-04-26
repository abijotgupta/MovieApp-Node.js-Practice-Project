/**
 * contains configuration files of the API
 * @module configuration
 * @requires module:configuration/dbConnection
 * @requires module:configuration/logger
 * @requires module:configuration/email
 */

module.exports = {
    logger: require('./logger'),
    dbConnection: require('./db')
}