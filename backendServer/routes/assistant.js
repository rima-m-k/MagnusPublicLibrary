const express = require("express");
const router = express.Router();
const upload = require('../fileUploadHelper/ImageHandler')
const {addBook} = require('../controller/assistant/addBook')
 
router.route('/addBook').post(upload.fields([{ name: 'frontCover', maxCount: 1},{ name: 'backCover', maxCount: 1}]),addBook )








module.exports = router

