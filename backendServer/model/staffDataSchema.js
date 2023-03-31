const mongoose = require("mongoose");
const Designation = require('./designationSchema');

const staffData = new mongoose.Schema({
    designationID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Designation,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
        
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,

    }
})

const StaffData = new mongoose.model("staffData", staffData)
module.exports = StaffData