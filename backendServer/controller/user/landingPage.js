const BOOK = require('../../model/bookDataSchema')
const fetchBook = async(req,res) =>{
    try {
        let allBook= await BOOK.find().populate("author genre")
        res.status(200).send({allBook:allBook})
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    fetchBook
}