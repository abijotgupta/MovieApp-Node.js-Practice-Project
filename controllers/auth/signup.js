/**
 * signup routes handlers
 * @module controllers/auth/signup
 */

const createError  = require('http-errors');
const { User } = require('../../models');

/**
 * post signup
 * @function postSignup
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Callback} next - callback
 */
const postSignup = (req, res, next) => { 
  // validation
  const validation = User.validate(req.body);
  if (validation.error) {
    const error = new Error(validation.error.message);
    error.statusCode = 400;
    return next(error);
  }

  //check existence
  const user = new User(req.body);
  user.checkExistence()
  .then(result => {

    if (result.check) {
      const error = new Error(result.message);
      error.statusCode = 409;
      return next(error);
    }

    user.save((err) => {
      if(err) {
        return next(createError(500));
      }

      res.status(201).json({
        message: 'User has been successfully created'
      })
    });
  })
  .catch(err => next(createError(500)));
};

module.exports = {postSignup};