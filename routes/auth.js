/**
 * authRouter
 * @module routes/auth
*/


/**
 * @type {Object}
 * @namespace authRouter
 */
const router = require('express').Router();
const { getLogin, postSignup } = require('../controllers');

router
    /**
     * @function post
     * @param {string} /login
     * @param {Callback} postLogin {@link module:controllers/auth/login~postLogin}
    */
    .post('/login')

    /**
     * @function post
     * @param {string} /signup
     * @param {Callback} postSignup {@link module:controllers/auth/signup~postSignup}
    */
    .post('/signup', postSignup)


module.exports = router;