/**
 * movie router
 * @module routes/movie
*/

/**
 * @type {Object}
 * @namespace movieRouter
*/
const router = require('express').Router();
const { getMovies, getOneMovie } = require('../controllers');

router
    /**
     * @function get
     * @param {string} /movies/:page
     * @param {Callback} getMovies {@link module:controllers/movie~getMovies}
    */
    .get('/movies/:page', getMovies)

    /**
     * @function get
     * @param {string} /movie/:id
     * @param {Callback} getOneMovie {@link module:controllers/movie~getOneMovie}
    */
    .get('/movie/:id', getOneMovie);

module.exports = router;