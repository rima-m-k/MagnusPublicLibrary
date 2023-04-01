const mongoose = require("mongoose");
const author = new mongoose.Schema({
  AuthorName:{
        type:String,
        required:true,
    },
    AuthorCode : {
        type : String,
        required : true,
    }, 
    Biography : {
        type : String,
        required : true,
    },
    Nationality : {
        type : String,
        required : true,
    },
    DateOfBirth : {
        type : String,
        required : true,
    },
    DateOfDeath : {
        type : String,
        default: ' '
    },
    Bibliography : {
        type : Array,
        required : true,
    }

        
    
})
const Author = new mongoose.model("author", author)
module.exports = Author