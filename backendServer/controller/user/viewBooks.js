const BOOK = require('../../model/bookDataSchema')
const fetchBook = async(req,res) =>{
    try {
        let allBook= await BOOK.find({},{title:1,image:1})
        res.status(200).send({allBook:allBook})
    } catch (error) {
        console.log(error);
        console.log("Internal server error")
        res.status(500).send({message: "Internal server error"}); 
      
    }
}

const fetchSingleBook = async(req,res) =>{
    try {
        let singleBook= await BOOK.find({_id:req.params.id}).populate("author genre")
        res.status(200).send({singleBook:singleBook})
    } catch (error) {
        console.log(error);
        console.log("Internal server error")
        res.status(500).send({message: "Internal server error"});
       
    }
}
module.exports = {
    fetchBook,fetchSingleBook
}