const mongoose = require("mongoose");

const userData = new mongoose.Schema({
    name: {
        type:String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address:[{
        address1:{  
            type:String
        },
        address2:{
            type:String
        },city:{
            type:String
        },state:{
            type:String
        },country:{
            type:String
        },pincode:{
            type:Number
        }
    }]
})

const UserData = new mongoose.model("userData", userData)
module.exports = UserData