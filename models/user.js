const dbConnection = require("../configuration/db");
const { userValidator, loginSchema } = require("../validator");
const { hashSync, compareSync } = require('bcryptjs');

class User {
    
    /**
     * returns a user instance
     * @param {Object} userData - user input
     */
    constructor(userData) {
        this.userData = { ...userData };
    };

    /**
     * saves a user into the db
     * @param {Callback} cb - callback after user saving correctly 
     */
    save(cb) {
        dbConnection('users', async (db) => {
            try{
                const hashedPassword = hashSync(this.userData['password'], 12);
                this.userData['password'] = hashedPassword;
                db.insertOne(this.userData);
                cb();
            } catch(error) {
                cb(error);
            }
        });
    };

    /**
     * checks if username or email already exists
     * @returns {Promise} resolves with object contains check field that is a boolean
     */
    checkExistence() {
        return new Promise((resolve, reject) => {
            dbConnection('users', async (db) => {
                try {
                    const user = await db.findOne({
                        $or: [
                            { username: this.userData['username'] }, 
                            { email: this.userData['email'] }
                        ],
                    });
                    if (!user) {
                        resolve({
                            check: false,
                        });
                    } else if (this.userData['username'] === user.username) {
                        resolve({
                            check: true,
                            message: 'This user is already in use',
                        });
                    } else if (this.userData['email'] === user.email) {
                        resolve({
                            check: true,
                            message: 'This email is already in use',
                        });
                    }
                } catch(err) {
                    reject(err);
                }  
            });
        });
    };

    /**
     * validate user input
     * @param {Object} userData - user input
     * @static
    */
    static validate(userData) {
        return userValidator.validate(userData);
    };


    /**
     * login a user
     * @param {Object} userData - user input
     * @returns {Promise} resolves with an error or user data
     * @static
    */
    static login(userData) {
        return new Promise((resolve, reject) => {

            //validation
            const validation = loginSchema.validate(userData);
            if (validation.error) {
                const error = new Error(validation.error.message);
                error.statusCode = 400;
                return resolve(error);
            }

            dbConnection('users', async (db) => {
                try {

                    //find user from  database
                    const user = await db.findOne(
                        { '$or': [
                            { username: userData['username'] }, 
                            { email: userData['username'] } ]
                        }, 
                        { projection: {username: 1, password: 1} }
                    );

                    if (!user || !compareSync(userData[`password`], user.password)) {
                        const error = new Error(`Please enter valid username and password`);
                        error.statusCode = 400;
                        return resolve(error);
                    } 
                    resolve(user);                    

                } catch (err) {
                    reject(err);
                }
            });
        });
    };
};


module.exports = User;