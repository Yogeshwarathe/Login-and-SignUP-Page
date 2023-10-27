const User = require("../models/user_tables");
const jwt = require("jsonwebtoken");
module.exports = class UserService {
    async find_user(Gmail) {
        return await User.query().where({Gmail:Gmail});

    }

    async createUser(userinfo){
        return await User.query().insert(userinfo)
          
    }

}