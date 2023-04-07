const BOOK = require("../../model/bookDataSchema");
const GENRE = require("../../model/genreDataSchema")
const AUTHOR = require("../../model/authorDataSchema");
const {  mongoose } = require("mongoose");
const addBook = async (req, res) => {
  try {
    let callNumber,checkTitle,authorID=null , genreID=null,checkAuthor,genreCode,checkCode,newAuthor,checkGenreName,checkGenreCode,newGenre,hundreds,thousands,newBook,genreData
    console.log("body",req.body);
    console.log("file",req.files);
     checkTitle =  await BOOK.findOne({
      title: { $regex: req.body.title, $options: "i" },
    });
    if(checkTitle){
      console.log("book name already exists")
    }else{
       
      //add new book
      if(req.body.author === 'other'){
         checkAuthor = await AUTHOR.findOne({
          AuthorName: { $regex: req.body.newAuthorName, $options: "i" },
        });
         checkCode = await AUTHOR.findOne({
          AuthorCode: { $regex: req.body.newAuthorCode, $options: "i" },
        });
        if (checkAuthor) {
          console.log("author name already exists")
        } else {
          if (checkCode) {
            console.log("author code already exists")
          } else {
             newAuthor = new AUTHOR({
              AuthorName: req.body.newAuthorName,
              AuthorCode: req.body.newAuthorCode.toUpperCase(),
              Biography: req.body.newAuthorBiography,
              Nationality: req.body.newAuthorNationality,
              DateOfBirth: req.body.newAuthorDOB,
              DateOfDeath: req.body.newAuthorDOD,
              Bibliography: [],
            });
             authorID = await newAuthor.save();
             console.log("addes author to db")
          }
        }
        

      }else{
        authorID= await AUTHOR.findById(req.body.author)
      }

      if(req.body.genre === 'other'){
        
         genreCode = req.body.newGenreCode.toUpperCase();
     checkGenreName = await GENRE.findOne({
      genreName: { $regex: req.body.newGenreName, $options: "i" },
    });
     checkGenreCode = await GENRE.findOne({
      genreCode: { $regex: genreCode, $options: "i" },
    });
    if (checkGenreName) {
      console.log("genre name already exists")
    } else {
      if (checkGenreCode) {
        console.log("genre code already exists")
      } else {
         newGenre = new GENRE({
          genreCode: genreCode,
          genreName: req.body.newGenreName,
          description: req.body.newGenreDesc,
          examples: [],
        });

         genreID = await newGenre.save();
         console.log("addes genre to db")
      }
    }

      }else{
        genreID=await GENRE.findById(req.body.genre)

         hundreds=Math.floor(100 + Math.random() * 9000)
         thousands=Math.floor(1000 + Math.random() * 9000)
 callNumber=hundreds+"."+thousands+" "+authorID.AuthorCode+"/"+genreID.genreCode
      }
     

       newBook = new BOOK({
        title:req.body.title,
        author:authorID._id,
        publisher:req.body.publisher,
       callnumber:callNumber,
        genre:genreID._id,
        publicationDate:req.body.publicationDate,
        synopsis:req.body.synopsis,
        copy:req.body.copy,
        pages:req.body.pages,
        image:req.files
      })
      newBook.save()
console.log("added book to db")

    }


  } catch (error) {
    console.log(error);
  }
};



const fetchBookAndGenres= async (req,res) =>{
  try {
    let genreData= await GENRE.find()
    let authorData =  await AUTHOR.find()
    res.status(200).send({genreData,authorData})
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .send({
        message:
          "An unexpected error occurred while processing your request. Please try again later ",
      });
  }
}



module.exports = {
  addBook,
  fetchBookAndGenres
};
