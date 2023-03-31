// const bwipjs = require('bwip-js');
// const { createCanvas } = require('canvas');
const BOOK = require('../../model/bookDataSchema')

const addBook = async(req,res) => {
    try {
        console.log(req.body)
        console.log(req.files)
let book = BOOK.findOne({title:req.body.title})
if(book){
  res.status(209).send(" Book already exists in database")
}else{
  let newBook = new BOOK({
    title:req.body.title,
    author:req.body.author,
    publisher:req.body.publisher,
    catalogueNumber:req.body.catalogueNumber,
    genre:req.body.genre,
    publicationDate:req.body.publicationDate,
    availability:req.body.availability,
    notes:req.body.notes,
    copy:req.body.copy,
    image:req.files.frontCover,
  })
  await  newBook.save();
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
        console.log(error)
        res.status(500)
    }
}

module.exports = {
    addBook,
}