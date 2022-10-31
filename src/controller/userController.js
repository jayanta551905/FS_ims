const { signupService } = require("../services/userServices");

exports.signup = async (req, res) => {
    //console.log("test=============>", req);
    try{
        const user = await signupService(req.body);
        await user.save ({validateBeforeSave:false});

        res.status(200).json({
            status: "Success",
            message: "Successfully signed up"
        });
    }catch (err) {
        console.log(err);
        res.status(500).json({
            status: "Fail",
            message: err.message
        });
    }
};