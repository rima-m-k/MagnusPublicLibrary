const mongoose = require("mongoose");
const USER = require('./userSchema')

const event = new mongoose.Schema({
   name:String,
   description:String,
   host:String,
   date:Date,
   startTime: String,
   endTime: String,
   fees:Number,
   status:String,
   totalSeat:Number,
   venue:String,
   Images:Array,
  banner:String,
   guests:[{
    bookingID:String,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:USER
    },
    seats :Array,
    timeOfBooking:Date,
    amountPaid: Number,
    bookingStatus:String,
      paymentStatus: {
         type: String,
         default: 'pending'  
      }
   }]
   
})

const Events = new mongoose.model("events", event)
module.exports = Events