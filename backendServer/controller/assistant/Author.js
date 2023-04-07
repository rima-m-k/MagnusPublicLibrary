const AUTHOR = require("../../model/authorDataSchema");

const addAuthor = async (req, res) => {
  try {
    let checkAuthor = await AUTHOR.findOne({
      AuthorName: { $regex: req.body.AuthorName, $options: "i" },
    });
    let checkCode = await AUTHOR.findOne({
      AuthorCode: { $regex: req.body.AuthorCode, $options: "i" },
    });
    if (checkAuthor) {
      res.status(409).send({ message: "Author name already exists" });
    } else {
      if (checkCode) {
        res.status(409).send({ message: "Author Code already exists" });
      } else {
        let authorData = new AUTHOR({
          AuthorName: req.body.AuthorName,
          AuthorCode: req.body.AuthorCode.toUpperCase(),
          Biography: req.body.Biography,
          Nationality: req.body.Nationality,
          DateOfBirth: req.body.DOB,
          DateOfDeath: req.body.DOD,
          Bibliography: [],
        });
        let x = await authorData.save();
        res.status(201).send({ message: "Successfully added to database" });
      }
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({
        message:
          "An unexpected error occurred while processing your request. Please try again later ",
      });
  }
};

module.exports = {
  addAuthor,
};
