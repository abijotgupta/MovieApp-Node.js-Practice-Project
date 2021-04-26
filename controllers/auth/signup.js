/**
 * signup routes handlers
 * @module controllers/auth/signup
 */

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
};

module.exports = {postSignup};