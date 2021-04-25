const router = require('express').Router();
const { getMovies, getOneMovie } = require('../controllers');

router
    .get('/movies/:page', getMovies)
    .get('/movie/:id', getOneMovie)

module.exports = router;