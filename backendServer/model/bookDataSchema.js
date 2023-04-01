const mongoose = require("mongoose");
const Genre= require("./genreDataSchema")
const bookData = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    callNumber: {
        type: String,
        required: true
    },
    genre: {
        type: mongoose.Types.ObjectId,
        ref:Genre,
        required: true
    },
    publicationDate: {
        type: String,

    },
    availability: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    },
    copy: {
        type: String,
        required: true
    },
    image:{
        type:Array
    },
   
})

const BookData = new mongoose.model("bookData", bookData)
module.exports = BookData