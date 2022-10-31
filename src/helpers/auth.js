const jwt = require("jsonwebtoken");

exports.generaToken = (userInfo) => {
    
    const payload = {
        email: userInfo.email,
        _id: userInfo._id,
        role: userInfo.role,
    };
        
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn : "7days"
    });
    return token;
};