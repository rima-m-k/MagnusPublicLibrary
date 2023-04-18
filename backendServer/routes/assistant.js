const express = require("express");
const router = express.Router();
const upload = require('../fileUploadHelper/ImageHandler')
const {addBook,fetchBookAndGenres} = require('../controller/assistant/Book')
 const {addAuthor} = require('../controller/assistant/Author');
const { addGenre } = require("../controller/assistant/Genre");
const { requireAuth } = require("../middlewares/isAuthenticated");


router.route('/addBook').get(fetchBookAndGenres).post(upload.fields([{ name: 'frontCover', maxCount: 1}]),addBook )
router.route('/addAuthor').post(addAuthor)
router.route('/addGenre').post(addGenre);









module.exports = router

