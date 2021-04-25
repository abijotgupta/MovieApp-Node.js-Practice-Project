//routes

const authRouter = require('./auth');
const movieRouter = require('./movie');

module.exports = (app) => {

    app.use('/auth', authRouter);
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
}