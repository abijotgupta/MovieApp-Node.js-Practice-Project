const dbConnection = require("../configuration/db");
const { userValidator } = require("../validator");

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
    save() {
        dbConnection('users', (db) => {
            db.insertOne(this.userData);
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

    
    static validate(userData) {
        return userValidator.validate(userData);
        //console.log(result);
    };
};

// const user = new User({
//     username: 'AbijotGupta',
//     email: 'abc@example.com',
//     password: 'Example@123',
//     first_name: 'Abijot',
//     last_name: 'Gupta'
// });

// user.checkExistence()
//     .then(check => {
//         console.log(check);
//     })
//     .catch(err => {
//         console.log(err)
//     })


module.exports = User;