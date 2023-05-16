const USER = require('../../model/userSchema')
const BOOK = require('../../model/bookDataSchema')
const CHECKOUT = require('../../model/bookLoanDataSchema')

async function getBookData (req,res){
    try {
        let books= await BOOK.find({},{title:1})
        res.json(books)
        
    } catch (error) {
        console.log(error);
        console.log("Internal server error")
        res.status(500).send({message: "Internal server error"});
         
    }


}
async function userSearch(req,res){
    try {
        console.log(req.body.term)

        let user = await USER.findOne({cardNumber:req.body.term})
        if(user){
            res.json(user)
        }else{
            res.status(404).send({message:"User Not Found"})
        }
    } catch (error) {
        console.log(error);
        console.log("Internal server error")
        res.status(500).send({message: "Internal server error"});
      
    } 
}

async function checkout(req,res){
    try {
        console.log(req.body)
        let expectedReturnDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)

        let checkUser = await CHECKOUT.findOne({user:req.body.userID})
        if(!checkUser){
            //create new checkuser
            let newCheckout = new CHECKOUT({
                user:req.body.userID,
                books: [
                    {
                      bookID: req.body.bookID,
                      dateOfBorrow : Date.now(),
                      renewDates:[],
                      dateOfReturn:null ,
                      fine: 0,
                    }
                  ],
            })
            newCheckout.save()
            res.status(200).send({message:"successful",expectedReturnDate})
        }else {
            //push
            let bookExists = checkUser.books.findIndex((book) => book.bookID  == req.body.bookID);
            if (bookExists !== -1) {
                //book und
                console.log("Already borrowed this book");
                res.status(200).send({message:"Already borrowed  this book",loanHistory:checkUser,expectedReturnDate})
            } else {
                //book array ll illa so add 
                await CHECKOUT.updateOne(
                    { user: req.body.userID },
                    {
                        $push: {
                            books: {
                                bookID: req.body.bookID,
                                dateOfBorrow : Date.now(),
                                renewDates:[],
                                dateOfReturn:null ,
                                fine: 0,
                            },
                        },
                    }
                );
                console.log("added to array ")
                res.status(200).send({message:"success",loanHistory:checkUser,expectedReturnDate})
            }
        }
    } catch (error) {
        console.log(error);
        console.log("Internal server error")
        res.status(500).send({message: "Internal server error"});
    }
}

 
async function returnRenew(req,res){
    console.log(req.body)
// let check return =await



}
module.exports ={
    getBookData,
    userSearch,
    checkout,
    returnRenew
}