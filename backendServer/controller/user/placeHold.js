const ONHOLD = require("../../model/onHold");
const USER = require("../../model/userSchema");
const mongoose = require("mongoose");
const placeHold = async (req, res) => { 
  try {
    
    let ONHold = await ONHOLD.findOne({ user: req.body.userID });
    if (!ONHold) {
      //first time holding a book
      let newOnHold = new ONHOLD({
        books: [
         {
            bookID:req.body.bookId,
            date: req.body.date,
          },
        ],
        user: req.body.userID,
      });
     await newOnHold.save();
      console.log("saved to db")
      res.status(200).send({message:"placed hold of this book"})

    } else {
      //add the book to existing books array of this user
      //check if the book already exists
      // getting the user data from the db

      let bookExists = ONHold.books.findIndex((book) => book.bookID  == req.body.bookId);

      //-1 means that book doesnt exist. 1 means it exists
      if (bookExists !== -1) {
        //book und
        console.log("Already holding this book");
        res.status(200).send("Already holding this book")
      } else {
        //book array ll illa so add 
        await ONHOLD.updateOne(
          { user: req.body.userID },
          {
            $push: {
              books: {
                bookID: req.body.bookId ,
                date: req.body.date,
              },
            },
          }
        );
        console.log("added to array ")
        res.status(200).send("placed hold of this book")
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  } 
};
module.exports = {
  placeHold,
};
