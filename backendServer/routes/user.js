const express = require("express");
const { userLogin } = require("../controller/user/login");
const { userSignup } = require("../controller/user/signup");
const router = express.Router();
const upload = require('../fileUploadHelper/ImageHandler')
 
router.route('/userSignup').post(upload.single("photo"),userSignup)

router.route('/userLogin').post(userLogin)







module.exports = router

