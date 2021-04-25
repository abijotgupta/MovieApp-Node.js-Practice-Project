const { getLogin } = require('./auth/login');
const { getMovies, getOneMovie } = require('./movieController');

module.exports = {
    getLogin,
    getMovies,
    getOneMovie,
}