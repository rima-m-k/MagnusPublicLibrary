const mongoose = require("mongoose");
const genre = new mongoose.Schema({
    genreCode:{
        type:String,
    },
    genreName : {
        type : String,
    },
    description : {
        type : String,
    },
    examples : {
        type : Array,
    },
})
const Genre = new mongoose.model("genre", genre)
module.exports = Genre