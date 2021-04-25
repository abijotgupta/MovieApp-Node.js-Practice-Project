const dbConnection = require("../configuration/db");
const { userValidator } = require("../validator");

class User {
    constructor(userData) {
        this.userData = { ...userData };
    };

    save() {
        dbConnection('users', (db) => {
            db.insertOne(this.userData);
        });
    };

    static validate(userData) {
        return userValidator.validate(userData);
        //console.log(result);
    };
};

const userData = {
    username: 'AbijotGupta',
    email: 'abc@example.com',
    password: 'Example@123',
    first_name: 'Abijot',
    last_name: 'Gupta'
};

const validation = User.validate(userData);