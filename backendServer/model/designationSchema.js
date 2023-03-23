const mongoose = require("mongoose");


const designations = new mongoose.Schema({
    designatinId:{
        type:String,
    },
    designation : {
        type : String,
        required : true
    },
   
})

const Designations = new mongoose.model("designations", designations)
module.exports = Designations