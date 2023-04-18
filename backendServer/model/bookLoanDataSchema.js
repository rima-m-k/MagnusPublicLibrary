const mongoose = require("mongoose");
const BOOK = require("./bookDataSchema");
const USER = require("./userSchema");
const bookLoan = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: USER,
  },

  books: [
    {
      bookID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: BOOK,
      },

      dateOfBorrow: {
        type: Date,
      },
      renewDates:Array, 
      dateOfReturn: {
        type: Date,
      },

      fine: {
        type: Number,
      },
    },
  ],
});
const BookLoan = new mongoose.model("bookLoan", bookLoan);
module.exports = BookLoan;
