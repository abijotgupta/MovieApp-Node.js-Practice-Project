const express = require('express');
const logger = require('./configuration/logger');
const middleware = require('./middlewares');
const routes = require('./routes/index.js');
const createError = require('http-errors');


const app = express();

process.on('unhandledRejection', (reason) => {
    logger.error(reason);
    process.exit(1);
});

//middleware
middleware(app);

//routes
routes(app);

app.use((req, res, next) => {
    const error = createError(404);
    res.status(error.statusCode).send(error.message);
});

module.exports = app;