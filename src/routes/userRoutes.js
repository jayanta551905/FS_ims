const express = require("express");
const router = express.Router();
const {signup} = require("../controller/userController");


router.post("/signup", signup);
router.get("/", (req, res) => {
    res.status(200).json({
        status: "Welcome to FS_ims system"
    });
});

module.exports = router;