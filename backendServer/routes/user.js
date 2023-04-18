const express = require("express");
const { userLogin } = require("../controller/user/login");
const { userSignup,verifyOTP } = require("../controller/user/signup");
const router = express.Router();
const upload = require('../fileUploadHelper/ImageHandler');
const { fetchBook,fetchSingleBook } = require("../controller/user/viewBooks");
const {requireAuth} = require("../middlewares/isAuthenticated");
const { placeHold } = require("../controller/user/placeHold");
const { search } = require("../controller/user/search");
const { userProfile } = require("../controller/user/userProfile");
const { libraryCard } = require("../controller/user/libraryCard");

router.route('/viewBooks').get(fetchBook)
router.route(`/books/:id`).get(fetchSingleBook)
router.route('/userSignup').post(userSignup).put(verifyOTP)
router.route('/userLogin').post(userLogin) 
router.route('/placeHold').post(requireAuth,placeHold)
router.route('/search').post(search)
router.route('/userProfile').get(userProfile)
router.route('/LibraryCardApplication').post(upload.single("file"),libraryCard)





 
module.exports = router

