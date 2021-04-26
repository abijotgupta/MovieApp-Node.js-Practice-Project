/**
 * @module routes
 * @requires module:routes/auth
 * @requires module:routes/movieRouter
 */
const authRouter = require('./auth');
const movieRouter = require('./movie');

module.exports = (app) => {

    /**
     * @function use
     * @param {string} /auth
     * @param {Module} authRouter {@link module:routes/auth}
    */
    app.use('/auth', authRouter);

    /**
     * @function use
     * @param {Module} authRouter {@link module:routes/movie}
    */
    app.use(movieRouter);


    //Sample routes

    // app.get('/', (req, res, next) => {
    //     //res.send('Welcome to the HOMEPAGE');
    
    //     // res.json( {
    //     //     "message": "Welcome to the Homepage!!!"
    //     // });
    
    //     res.redirect('/user');
    // });
    
    // app.get('/user/:id/:postid', (req, res, next) => {
    //     // console.log(req.query)
    //     // console.log(req.params);
    //     res.send('on the User page');
    // });
};