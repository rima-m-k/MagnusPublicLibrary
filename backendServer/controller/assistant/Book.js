// const bwipjs = require('bwip-js');
// const { createCanvas } = require('canvas');
const BOOK = require("../../model/bookDataSchema");
const GENRE = require("../../model/genreDataSchema")

const addBook = async (req, res) => {
  try {
    let genreData= null
    console.log("body",req.body);
    console.log("file",req.files);
    let book = await  BOOK.findOne({ title: req.body.title });
    console.log("book",book)
    if (book) {
      res.status(209).send(" Book already exists in database");
    } else {
if(req.body.genre!=='other'){
 genreData = await GENRE.findById(req.body.genre)
}else{
let  newGenre = new GENRE({
  genreCode:req.body.newGenreCode,
  genreName:req.body.newGenre
})
  genreData= await  newGenre.save()
}
const genreCode = genreData.genreName.slice(0,1).toUpperCase();
const authorCode = req.body.author.slice(0,2).toUpperCase();
const beforeDeciaml = Math.floor(100 + Math.random() * 9000);
const afterDecimal =  Math.floor(1000 + Math.random() * 9000);
const callNumber = beforeDeciaml + "." + afterDecimal + " " + authorCode + "/" + genreCode
console.log(callNumber)

      let newBook = new BOOK({
        title: req.body.title,
        author: req.body.author,
        publisher: req.body.publisher,
        callNumber: callNumber,
        genre: genreData._id,
        publicationDate: req.body.publicationDate,
        availability: req.body.availability,
        notes: req.body.notes,
        copy: req.body.copy,
        image: req.files.frontCover,
      });
      await newBook.save();
    }

    // Set the canvas renderer for bwip-js
    // bwipjs.loadFont('helvetica', 14, require('canvas-prebuilt').registerFont('helvetica.ttf', { family: 'helvetica' }));
    // bwipjs.Canvas = createCanvas;

    // Define the barcode options
    // const barcodeOptions = {
    //   bcid: 'code128', // barcode type
    //   text: '123456789', // barcode data
    //   scale: 3, // scaling factor
    //   height: 10, // barcode height in mm
    //   includetext: true, // include text or not
    //   textxalign: 'center', // text horizontal alignment
    //   textsize: 13, // text font size
    // };

    // Generate the barcode image and save it to a file
    // bwipjs.toBuffer(barcodeOptions, function (err, png) {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     require('fs').writeFileSync('barcode.png', png);
    //   }
    // });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports = {
  addBook,
};
