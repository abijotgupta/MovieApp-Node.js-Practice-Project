/**
 * route handlers
 * @module controllers
 * @requires module:controllers/movieController
 * @requires module:controllers/auth/postSignup
*/

//const { getLogin } = require('./auth/login');
const { postSignup } = require('./auth/signup');
const { getMovies, getOneMovie } = require('./movieController');

module.exports = {
    //getLogin,
    getMovies,
    getOneMovie,
    postSignup,
}