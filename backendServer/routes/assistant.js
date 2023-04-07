const express = require("express");
const router = express.Router();
const upload = require('../fileUploadHelper/ImageHandler')
const {addBook,fetchBookAndGenres} = require('../controller/assistant/Book')
 const {addAuthor} = require('../controller/assistant/Author');
const { addGenre } = require("../controller/assistant/Genre");
const { requireAuth } = require("../middlewares/isAuthenticated");


router.route('/addBook').get(requireAuth,fetchBookAndGenres).post(requireAuth,upload.fields([{ name: 'frontCover', maxCount: 1}]),addBook )
router.route('/addAuthor').post( requireAuth,addAuthor)
router.route('/addGenre').post(requireAuth,addGenre);









module.exports = router

