const express = require("express");
const { userLogin } = require("../controller/user/login");
const { userSignup } = require("../controller/user/signup");
const router = express.Router();
// const upload = require('../fileUploadHelper/ImageHandler');
const { fetchBook } = require("../controller/user/landingPage");
const {requireAuth} = require("../middlewares/isAuthenticated");
const { placeHold } = require("../controller/user/placeHold");

router.route('/').get(fetchBook)
router.route('/userSignup').post(userSignup)
router.route('/userLogin').post(userLogin) 
router.route('/placeHold').post(requireAuth,placeHold)






 
module.exports = router

