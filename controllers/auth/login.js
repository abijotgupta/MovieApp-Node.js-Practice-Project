/**
 * login routes handlers
 * @module controllers/auth/login
 */

const logger = require('../../configuration/logger')

module.exports.getLogin = (req, res, next) => {
    logger.info('Hello');
    res.send('Welcome to Login page');
}