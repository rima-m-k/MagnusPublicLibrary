const mongoose = require("mongoose");
const GENRE= require("./genreDataSchema")
const AUTHOR =  require("./authorDataSchema")
const bookData = new mongoose.Schema({
    title: {
        type: String,
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref:AUTHOR,
    },
    publisher: {
        type: String,
    },
    callNumber: {
        type: String,
    },
    genre: {
        type: mongoose.Types.ObjectId,
        ref:GENRE,
    },
    publicationDate: {
        type: String,

    },
    synopsis: {
        type: String,
    },
    copy: {
        type: String,
    },
    image:{
        type:Array
    },
    pages: {
        type: String,
    },
   
})

const BookData = new mongoose.model("bookData", bookData)
module.exports = BookData