const mongoose = require("mongoose");
const genre = new mongoose.Schema({
    genreCode:{
        type:String,
        required:true,
    },
    genreName : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    examples : {
        type : String,
        required : true,
    },
})
const Genre = new mongoose.model("genre", genre)
module.exports = Genre