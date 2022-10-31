const User = require("../models/userModel");

exports.signupService = async (userInfo) => {
    const user = await User.create(userInfo);
    return user;
};