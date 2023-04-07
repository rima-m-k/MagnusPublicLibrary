const mongoose = require("mongoose");
const author = new mongoose.Schema({
  AuthorName:{
        type:String,
    },
    AuthorCode : {
        type : String,
    }, 
    Biography : {
        type : String,
    },
    Nationality : {
        type : String,
    },
    DateOfBirth : {
        type : String,
    },
    DateOfDeath : {
        type : String,
        default: ' '
    },
    Bibliography : {
        type : Array,
    }

        
    
})
const Author = new mongoose.model("author", author)
module.exports = Author