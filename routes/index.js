//routes

const authRouter = require('./auth');


module.exports = (app) => {

    app.use('/auth', authRouter);


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