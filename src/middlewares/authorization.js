const User = require("../models/userModel");
const {expressjwt} = require("express-jwt");

exports.requireSignin = expressjwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"]
});

exports.isAdmin = async (req, res, next) => {
    console.log("Auth test", req.auth);
    try{
        const user = await User.findById(req.auth._id);
        if (user.role !== "admin") {
            return res.status(403).json({
                status: "Fail",
                message: "Unauthorized admin resource"
            });
        }else{
            next();
        }
    }catch (err) {
        console.log(err);
    }
};


exports.isManager = async (req, res, next) => {
    console.log("Auth test", req.auth);

    try{
        const user = await user.findById(req.auth._id);
        if (user.role !== "store-manager"){
            return res.status(403).json({
                status: "Fail",
                message: "Unauthorized store manager"
            });
        }else{
            next();
        }
    }catch (err) {
        console.log(err);
    }
}