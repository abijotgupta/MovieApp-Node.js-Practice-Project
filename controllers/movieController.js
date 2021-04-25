const { dbConnection } = require("../configuration");
const {ObjectId} = require('bson');

const getMovies = (req, res, next) => {
    const pageNum = parseInt(req.params.page);
    if(isNaN(pageNum)) {
        return res.status(400).send('Bad Request');
    }

    const moviesToSkip = (pageNum - 1) * 10;

    dbConnection('movies', async(db) => {
        try {
            const movies = await db.find({}).skip(moviesToSkip).limit(10).toArray();
            res.json(movies);
        } catch(err) {
            return res.status(500).send('Internal Server Error');
        }
    });
};

const getOneMovie = (req, res, next) => {
    //id is stored in db as object
    if(! ObjectId.isValid(req.params.id)) {
        return res.status(400).send('Bad Request');
    }
    const _movieId = new ObjectId(req.params.id);

    dbConnection('movies', async(db) => {
        try {
            const movie = await db.findOne({_id: _movieId});
            if(!movie) {
                return res.status(400).send('Not Found');
            }
            res.json(movie);
        } catch(err) {
            return res.status(500).send('Server Error');
        }
    });
}

module.exports = {
    getMovies,
    getOneMovie
}