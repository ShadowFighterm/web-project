const userModel = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class UserServices {
    static async RegisterUser(name, password, role) {
        try {
            console.log("name", name, "password", password);
            const CreateUser = new userModel({ name, password, role });
            const result = await CreateUser.save();
            console.log("User registered successfully:", result);
            return result;
        }
        catch (err) {
            console.log(err);
        }
    }
    static async GetUserByName(name) {
        try {
            console.log("Checking if user exists:", name);  // Log the name being searched
            const user = await userModel.findOne({ name });
            console.log("User found:", user);  // Log the result of the search
            return user;
        } catch (err) {
            console.log("Error in GetUserByName:", err);
        }
    }

    static async ComparePassword(name, password) {
        try {
            var user = await this.GetUserByName(name);
            return await user.ComparePassword(password);
        }
        catch (err) {
            console.log("Error in comparing password", err);
            return false;
        }
    }
    static async GenerateTokens(TokenData, JWTKey, TokenExpiryTime) {
        try {
            return jwt.sign(TokenData, JWTKey, { expiresIn: TokenExpiryTime });
        }
        catch (err) {
            console.log(err);
        }
    }
}

module.exports = UserServices;